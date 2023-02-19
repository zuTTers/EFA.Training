using System;
using System.Collections.Generic;

#nullable disable

namespace EFA.Models
{
    public partial class Dashboard
    {
        public int Dashboard1 { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UpdatedUser { get; set; }

        public virtual User CreatedUserNavigation { get; set; }
        public virtual User UpdatedUserNavigation { get; set; }
    }
}
