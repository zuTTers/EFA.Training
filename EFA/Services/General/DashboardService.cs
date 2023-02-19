using EFA.Shared;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFA.Services.System
{
    public class DashboardService
    {

    }


    public class DashboardDTO
    {
        public Int32 Dashboard1 { get; set; }
        public String Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public Int32 CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public Int32 UpdatedUser { get; set; }
        public String CreatedUserText { get; set; }
        public String UpdatedUserText { get; set; }
    }

    public class DashboardFilter
    {
        public Int32? Dashboard1 { get; set; }
        public String Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? CreatedDate2 { get; set; }
        public Int32? CreatedUser { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public DateTime? UpdatedDate2 { get; set; }
        public Int32? UpdatedUser { get; set; }
    }
}
