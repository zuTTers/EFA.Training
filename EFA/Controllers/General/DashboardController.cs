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
    public class DashboardController : ControllerBase
    {
        private readonly DashboardService _dashboardService;
        private readonly UserInfo _userInfo;
        private readonly SessionHelper _sessionHelper;
        private readonly SystemLogService _logger;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public DashboardController(IHttpContextAccessor httpContextAccessor)
        {
            _dashboardService = new DashboardService();
            _sessionHelper = new SessionHelper(httpContextAccessor.HttpContext);
            _userInfo = _sessionHelper.GetCurrentUser();
            _logger = new SystemLogService();
            _httpContextAccessor = httpContextAccessor;
        }

        //[HttpPost("GetDashboardList")]
        //[SessionFilterAtrribute]
        //public ReturnInfo<DashboardDTO> GetDashboardList([FromBody] DashboardListQueryParams  dashboardListQueryParams)
        //{
        //     ReturnInfo<DashboardDTO> returnInfo = new ReturnInfo<DashboardDTO>();
        //    try
        //    {
        //        var resultData = _dashboardService.GetDashboardList(dashboardListQueryParams.Filter, dashboardListQueryParams.QueryInfo,dashboardListQueryParams.IsExport);
               
        //        if (!dashboardListQueryParams.IsExport)
        //        {
        //            returnInfo.Data = resultData.Data;
        //        }
        //        else
        //        {
        //            returnInfo.Key = ExcelHelper.AddListAsExcelToCache<DashboardDTO>(resultData.Data, dashboardListQueryParams.ColumnInfos);
        //        }

        //        returnInfo.TotalCount = resultData.TotalCount;
        //        returnInfo.IsSuccess = true;

        //    }
        //    catch (Exception ex)
        //    {
        //        returnInfo.IsSuccess = false;
        //        returnInfo.ErrorMessage = ex.Message;
        //        _logger.AddLog("DashboardController.GetDashboardList", ex.ToString(), _userInfo.UserId);
        //    }

        //    return returnInfo;
        //}

        public class DashboardListQueryParams
        {
            public DashboardFilter Filter { get; set; }
            public QueryInfo QueryInfo { get; set; }
            public bool IsExport { get; set; }
            public List<ColumnInfo> ColumnInfos {get;set;}
         }
    }
}
