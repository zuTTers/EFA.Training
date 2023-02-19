using System;
using System.Collections.Generic;

#nullable disable

namespace EFA.Models
{
    public partial class Parameter
    {
        public int ParamId { get; set; }
        public int ParamType { get; set; }
        public string ParamCode { get; set; }
        public string ParamDesc { get; set; }
        public int? ParentId { get; set; }
        public string FreeText1 { get; set; }
        public string FreeText2 { get; set; }
        public string FreeText3 { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UpdatedUser { get; set; }

        public virtual User CreatedUserNavigation { get; set; }
        public virtual User UpdatedUserNavigation { get; set; }
    }
}
