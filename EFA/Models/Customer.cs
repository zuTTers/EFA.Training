using System;
using System.Collections.Generic;

#nullable disable

namespace EFA.Models
{
    public partial class Customer
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
        public DateTime? FirstStartDate { get; set; }
        public DateTime? WorkingStartDate { get; set; }
        public DateTime? WorkingEndDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UpdatedUser { get; set; }

        public virtual User CreatedUserNavigation { get; set; }
        public virtual User UpdatedUserNavigation { get; set; }
    }
}
