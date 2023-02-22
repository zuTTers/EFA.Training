using EFA.Shared;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFA.Models;

namespace EFA.Services.System
{
	public class CustomerService
	{

		public List<ItemForCombo> GetListForCombo(string search, int? value)
		{
			using (EdisDEVContext dbContext = new EdisDEVContext())
			{
				List<ItemForCombo> itemComboList = new List<ItemForCombo>();
				if (!string.IsNullOrEmpty(search))
				{
					itemComboList = dbContext.Customers.
					   Where(x => x.FullName.Contains(search)).
					   Take(20).
					   ToList().
					   Select(x => new ItemForCombo
					   {
						   DisplayText = x.FullName,
						   Value = x.CustomerId,
						   FreeText = x.CustomerId.ToString()

					   }).ToList();
				}
				else if (value.HasValue && value.Value != 0)
				{
					itemComboList = dbContext.Customers.
					  Where(x => x.CustomerId == value).
					  ToList().
					  Select(x => new ItemForCombo
					  {
						  DisplayText = x.FullName,
						  Value = x.CustomerId,
						  FreeText = x.CustomerId.ToString()

					  }).ToList();
				}

				return itemComboList;
			}
		}

		public PageList<CustomerDTO> GetCustomerList(CustomerFilter filter, QueryInfo queryInfo, bool isExport)
		{
			using (EdisDEVContext dbContext = new EdisDEVContext())
			{
				var dbQuery = dbContext.Customers.OrderByDescending(x => x.CustomerId).Where(x => 1 == 1);
				int totalCount = 0;

				if (filter != null)
				{
					if (filter.CustomerId.HasValue) dbQuery = dbQuery.Where(x => x.CustomerId == filter.CustomerId.Value);
					if (!string.IsNullOrEmpty(filter.IdentityNumber)) dbQuery = dbQuery.Where(x => x.IdentityNumber.Contains(filter.IdentityNumber));
					if (!string.IsNullOrEmpty(filter.FullName)) dbQuery = dbQuery.Where(x => x.FullName.Contains(filter.FullName));
					if (!string.IsNullOrEmpty(filter.PhoneNumber)) dbQuery = dbQuery.Where(x => x.PhoneNumber.Contains(filter.PhoneNumber));
					if (!string.IsNullOrEmpty(filter.Address)) dbQuery = dbQuery.Where(x => x.Address.Contains(filter.Address));
					if (filter.IsPaid.HasValue) dbQuery = dbQuery.Where(x => x.IsPaid == filter.IsPaid.Value);
					if (!string.IsNullOrEmpty(filter.IdentityCode))
					{
						dbQuery = dbQuery.Where(x => x.IdentityCode == filter.IdentityCode);
					}
				}

				totalCount = dbQuery.Count();

				if (queryInfo != null)
				{
					if (!string.IsNullOrEmpty(queryInfo.OrderBy))
					{
						string clientOrderByName = queryInfo.OrderBy.StartsWith("-") ? queryInfo.OrderBy.Substring(1) : queryInfo.OrderBy;
						string orderByName = typeof(Customer).GetProperties().Where(x => x.Name.ToUpper() == clientOrderByName.ToUpper()).First().Name;

						if (queryInfo.OrderBy.StartsWith("-"))
						{
							dbQuery = dbQuery.OrderByDescending(p => EF.Property<object>(p, orderByName));
						}
						else
						{
							dbQuery = dbQuery.OrderBy(p => EF.Property<object>(p, orderByName));
						}
					}
				}

				if (!isExport)
				{
					if (queryInfo != null && queryInfo.Pager != null)
					{
						dbQuery = dbQuery.Skip((queryInfo.Pager.CurrentPage) * queryInfo.Pager.PageSize).Take(queryInfo.Pager.PageSize);
					}
				}

				var data = dbQuery.ToList()
					 .Select(x => new CustomerDTO
					 {
						 CustomerId = x.CustomerId,
						 CustomerType = x.CustomerType,
						 IdentityNumber = x.IdentityNumber,
						 FullName = x.FullName,
						 PhoneNumber = x.PhoneNumber,
						 Age = x.Age,
						 Gender = x.Gender,
						 Address = x.Address,
						 IdentityCode = x.IdentityCode,
						 FirstStartDate = x.FirstStartDate,
						 WorkingStartDate = x.WorkingStartDate,
						 WorkingEndDate = x.WorkingEndDate,
						 IsPaid = x.IsPaid,
						 CreatedUser = x.CreatedUser,
						 CreatedDate = x.CreatedDate,
						 UpdatedUser = x.UpdatedUser,
						 UpdatedDate = x.UpdatedDate,
						 CreatedUserText = dbContext.Users.First(y => y.UserId == x.CreatedUser).UserName,
						 UpdatedUserText = dbContext.Users.First(y => y.UserId == x.UpdatedUser).UserName
					 }).ToList();

				return new PageList<CustomerDTO> { Data = data, TotalCount = totalCount };

			}
		}

		public CustomerDTO SaveCustomer(CustomerDTO customerDTO, UserInfo userInfo)
		{
			Customer customer = new Customer();
			using (EdisDEVContext dbContext = new EdisDEVContext())
			{
				bool isNewRecord = customerDTO.CustomerId == 0;
				if (isNewRecord)
				{
					customer.CreatedDate = DateTime.Now;
					customer.CreatedUser = userInfo.UserId;
					customer.FirstStartDate = DateTime.Now;
					customer.IdentityCode = Guid.NewGuid().ToString("N");
				}
				else
				{
					customer = dbContext.Customers.First(x => x.CustomerId == customerDTO.CustomerId);

				}

				customer.UpdatedDate = DateTime.Now;
				customer.UpdatedUser = userInfo.UserId;

				customer.CustomerType = customerDTO.CustomerType;
				customer.IdentityNumber = customerDTO.IdentityNumber;
				customer.FullName = customerDTO.FullName;
				customer.PhoneNumber = customerDTO.PhoneNumber;
				customer.Age = customerDTO.Age;
				customer.Gender = customerDTO.Gender;
				customer.Address = customerDTO.Address;
				customer.IsPaid = customerDTO.IsPaid;
				customer.WorkingStartDate = customerDTO.WorkingStartDate.Value.AddDays(1);
				customer.WorkingEndDate = customerDTO.WorkingEndDate.Value.AddDays(1);

				if (isNewRecord)
				{
					dbContext.Customers.Add(customer);
				}

				dbContext.SaveChanges();

				customerDTO.CustomerId = customer.CustomerId;
			}

			return customerDTO;
		}


		public void DeleteCustomer(CustomerDTO customerDTO)
		{
			using (EdisDEVContext dbContext = new EdisDEVContext())
			{
				var customer = dbContext.Customers.FirstOrDefault(x => x.CustomerId == customerDTO.CustomerId);
				if (customer != null)
				{
					dbContext.Customers.Remove(customer);
					dbContext.SaveChanges();
				}
			}
		}
	}


	public class CustomerDTO
	{
		public int CustomerId { get; set; }
		public bool CustomerType { get; set; }
		public string IdentityNumber { get; set; }
		public string FullName { get; set; }
		public string PhoneNumber { get; set; }
		public int? Age { get; set; }
		public bool? Gender { get; set; }
		public string Address { get; set; }
		public string IdentityCode { get; set; }
		public DateTime FirstStartDate { get; set; }
		public DateTime? WorkingStartDate { get; set; }
		public DateTime? WorkingEndDate { get; set; }
		public bool IsPaid { get; set; }
		public Int32 CreatedUser { get; set; }
		public DateTime CreatedDate { get; set; }
		public Int32 UpdatedUser { get; set; }
		public DateTime UpdatedDate { get; set; }
		public String CreatedUserText { get; set; }
		public String UpdatedUserText { get; set; }
	}

	public class CustomerFilter
	{
		public Int32? CustomerId { get; set; }
		public String IdentityNumber { get; set; }
		public String FullName { get; set; }
		public String PhoneNumber { get; set; }
		public String Address { get; set; }
		public Int32? CreatedUser { get; set; }
		public DateTime? CreatedDate { get; set; }
		public DateTime? CreatedDate2 { get; set; }
		public Int32? UpdatedUser { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public DateTime? UpdatedDate2 { get; set; }
		public Boolean? IsPaid { get; set; }
		public String IdentityCode { get; set; }

	}
}
