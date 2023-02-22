using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFA.Services.System;
using EFA.Shared;
using EFA.Shared.Export;
using EFA.Shared.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace VTS.Controllers.System
{
	[ApiController]
	[Route("api/[controller]")]
	public class CustomerController : ControllerBase
	{
		private readonly CustomerService _customerService;
		private readonly UserInfo _userInfo;
		private readonly SessionHelper _sessionHelper;
		private readonly SystemLogService _logger;
		private readonly IHttpContextAccessor _httpContextAccessor;

		public CustomerController(IHttpContextAccessor httpContextAccessor)
		{
			_customerService = new CustomerService();
			_sessionHelper = new SessionHelper(httpContextAccessor.HttpContext);
			_userInfo = _sessionHelper.GetCurrentUser();
			_logger = new SystemLogService();
			_httpContextAccessor = httpContextAccessor;
		}

		[HttpPost("GetCustomerList")]
		[SessionFilterAtrribute]
		public ReturnInfo<CustomerDTO> GetCustomerList([FromBody] CustomerListQueryParams customerListQueryParams)
		{
			ReturnInfo<CustomerDTO> returnInfo = new ReturnInfo<CustomerDTO>();
			try
			{
				var resultData = _customerService.GetCustomerList(customerListQueryParams.Filter, customerListQueryParams.QueryInfo, customerListQueryParams.IsExport);

				if (!customerListQueryParams.IsExport)
				{
					returnInfo.Data = resultData.Data;
				}
				else
				{
					returnInfo.Key = ExcelHelper.AddListAsExcelToCache<CustomerDTO>(resultData.Data, customerListQueryParams.ColumnInfos);
				}

				returnInfo.TotalCount = resultData.TotalCount;
				returnInfo.IsSuccess = true;

			}
			catch (Exception ex)
			{
				returnInfo.IsSuccess = false;
				returnInfo.ErrorMessage = ex.Message;
				_logger.AddLog("CustomerController.GetCustomerList", ex.ToString(), _userInfo.UserId);
			}

			return returnInfo;
		}

		[HttpPost("SaveCustomer")]
		[SessionFilterAtrribute]
		public ReturnInfo<CustomerDTO> SaveCustomer([FromBody] CustomerDTO customerDTO)
		{
			ReturnInfo<CustomerDTO> returnInfo = new ReturnInfo<CustomerDTO>();

			try
			{
				returnInfo.Data = new List<CustomerDTO> { _customerService.SaveCustomer(customerDTO, _userInfo) };
				returnInfo.IsSuccess = true;
				returnInfo.Message = "GENERAL.SAVED";
			}
			catch (Exception ex)
			{
				returnInfo.IsSuccess = false;
				returnInfo.ErrorMessage = ex.Message;
				_logger.AddLog("CustomerController.SaveCustomer", ex.ToString(), _userInfo.UserId);
			}

			return returnInfo;

		}

		[HttpPost("GetListForCombo")]
		[SessionFilterAtrribute]
		public ReturnInfo<ItemForCombo> GetListForCombo([FromBody] ListForComboFilter filter)
		{
			ReturnInfo<ItemForCombo> returnInfo = new ReturnInfo<ItemForCombo>();

			try
			{
				var _customerListForCombo = _customerService.GetListForCombo(filter.Search, filter.Id);
				returnInfo.IsSuccess = true;
				returnInfo.Data = _customerListForCombo;
			}
			catch (Exception ex)
			{
				returnInfo.IsSuccess = false;
				returnInfo.ErrorMessage = ex.Message;
				_logger.AddLog("CustomerController.GetListForCombo", ex.ToString(), _userInfo.UserId);
			}

			return returnInfo;
		}


		[HttpPost("DeleteCustomer")]
		[SessionFilterAtrribute]
		public ReturnInfo<CustomerDTO> DeleteCustomer([FromBody] CustomerDTO customerDTO)
		{
			ReturnInfo<CustomerDTO> returnInfo = new ReturnInfo<CustomerDTO>();

			try
			{
				_customerService.DeleteCustomer(customerDTO);
				returnInfo.IsSuccess = true;
				returnInfo.Message = "GENERAL.DELETED";
			}
			catch (Exception ex)
			{
				returnInfo.IsSuccess = false;
				returnInfo.ErrorMessage = ex.Message;
				_logger.AddLog("CustomerController.DeleteCustomer", ex.ToString(), _userInfo.UserId);
			}

			return returnInfo;

		}

		public class CustomerListQueryParams
		{
			public CustomerFilter Filter { get; set; }
			public QueryInfo QueryInfo { get; set; }
			public bool IsExport { get; set; }
			public List<ColumnInfo> ColumnInfos { get; set; }
		}
	}
}
