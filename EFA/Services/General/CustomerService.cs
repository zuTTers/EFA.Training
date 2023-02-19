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
                    if (filter.CreatedUser.HasValue) dbQuery = dbQuery.Where(x => x.CreatedUser == filter.CreatedUser.Value);
                    if (filter.CreatedDate.HasValue) dbQuery = dbQuery.Where(x => x.CreatedDate >= filter.CreatedDate.Value);
                    if (filter.CreatedDate2.HasValue) dbQuery = dbQuery.Where(x => x.CreatedDate <= filter.CreatedDate2.Value);
                    if (filter.UpdatedUser.HasValue) dbQuery = dbQuery.Where(x => x.UpdatedUser == filter.UpdatedUser.Value);
                    if (filter.UpdatedDate.HasValue) dbQuery = dbQuery.Where(x => x.UpdatedDate >= filter.UpdatedDate.Value);
                    if (filter.UpdatedDate2.HasValue) dbQuery = dbQuery.Where(x => x.UpdatedDate <= filter.UpdatedDate2.Value);
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
                         IdentityNumber = x.IdentityNumber,
                         FullName = x.FullName,
                         PhoneNumber = x.PhoneNumber,
                         Address = x.Address,
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
                }
                else
                {
                    customer = dbContext.Customers.First(x => x.CustomerId == customerDTO.CustomerId);

                }

                customer.UpdatedDate = DateTime.Now;
                customer.UpdatedUser = userInfo.UserId;


                customer.IdentityNumber = customerDTO.IdentityNumber;
                customer.FullName = customerDTO.FullName;
                customer.PhoneNumber = customerDTO.PhoneNumber;
                customer.Address = customerDTO.Address;





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
        public Int32 CustomerId { get; set; }
        public String IdentityNumber { get; set; }
        public String FullName { get; set; }
        public String PhoneNumber { get; set; }
        public String Address { get; set; }
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
    }
}
