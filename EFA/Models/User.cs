using System;
using System.Collections.Generic;

#nullable disable

namespace EFA.Models
{
    public partial class User
    {
        public User()
        {
            AuthCreatedUserNavigations = new HashSet<Auth>();
            AuthUpdatedUserNavigations = new HashSet<Auth>();
            CounterCreatedUserNavigations = new HashSet<Counter>();
            CounterUpdatedUserNavigations = new HashSet<Counter>();
            CustomerCreatedUserNavigations = new HashSet<Customer>();
            CustomerUpdatedUserNavigations = new HashSet<Customer>();
            DashboardCreatedUserNavigations = new HashSet<Dashboard>();
            DashboardUpdatedUserNavigations = new HashSet<Dashboard>();
            EmailAttachmentCreatedUserNavigations = new HashSet<EmailAttachment>();
            EmailAttachmentUpdatedUserNavigations = new HashSet<EmailAttachment>();
            EmailConfigCreatedUserNavigations = new HashSet<EmailConfig>();
            EmailConfigUpdatedUserNavigations = new HashSet<EmailConfig>();
            EmailCreatedUserNavigations = new HashSet<Email>();
            EmailUpdatedUserNavigations = new HashSet<Email>();
            LogCreatedUserNavigations = new HashSet<Log>();
            LogUpdatedUserNavigations = new HashSet<Log>();
            MenuCreatedUserNavigations = new HashSet<Menu>();
            MenuUpdatedUserNavigations = new HashSet<Menu>();
            ParameterCreatedUserNavigations = new HashSet<Parameter>();
            ParameterUpdatedUserNavigations = new HashSet<Parameter>();
            RoleAuthCreatedUserNavigations = new HashSet<RoleAuth>();
            RoleAuthUpdatedUserNavigations = new HashSet<RoleAuth>();
            RoleCreatedUserNavigations = new HashSet<Role>();
            RoleUpdatedUserNavigations = new HashSet<Role>();
            UserRoleCreatedUserNavigations = new HashSet<UserRole>();
            UserRoleUpdatedUserNavigations = new HashSet<UserRole>();
            UserRoleUsers = new HashSet<UserRole>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public string LastLoginIp { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UpdatedUser { get; set; }

        public virtual ICollection<Auth> AuthCreatedUserNavigations { get; set; }
        public virtual ICollection<Auth> AuthUpdatedUserNavigations { get; set; }
        public virtual ICollection<Counter> CounterCreatedUserNavigations { get; set; }
        public virtual ICollection<Counter> CounterUpdatedUserNavigations { get; set; }
        public virtual ICollection<Customer> CustomerCreatedUserNavigations { get; set; }
        public virtual ICollection<Customer> CustomerUpdatedUserNavigations { get; set; }
        public virtual ICollection<Dashboard> DashboardCreatedUserNavigations { get; set; }
        public virtual ICollection<Dashboard> DashboardUpdatedUserNavigations { get; set; }
        public virtual ICollection<EmailAttachment> EmailAttachmentCreatedUserNavigations { get; set; }
        public virtual ICollection<EmailAttachment> EmailAttachmentUpdatedUserNavigations { get; set; }
        public virtual ICollection<EmailConfig> EmailConfigCreatedUserNavigations { get; set; }
        public virtual ICollection<EmailConfig> EmailConfigUpdatedUserNavigations { get; set; }
        public virtual ICollection<Email> EmailCreatedUserNavigations { get; set; }
        public virtual ICollection<Email> EmailUpdatedUserNavigations { get; set; }
        public virtual ICollection<Log> LogCreatedUserNavigations { get; set; }
        public virtual ICollection<Log> LogUpdatedUserNavigations { get; set; }
        public virtual ICollection<Menu> MenuCreatedUserNavigations { get; set; }
        public virtual ICollection<Menu> MenuUpdatedUserNavigations { get; set; }
        public virtual ICollection<Parameter> ParameterCreatedUserNavigations { get; set; }
        public virtual ICollection<Parameter> ParameterUpdatedUserNavigations { get; set; }
        public virtual ICollection<RoleAuth> RoleAuthCreatedUserNavigations { get; set; }
        public virtual ICollection<RoleAuth> RoleAuthUpdatedUserNavigations { get; set; }
        public virtual ICollection<Role> RoleCreatedUserNavigations { get; set; }
        public virtual ICollection<Role> RoleUpdatedUserNavigations { get; set; }
        public virtual ICollection<UserRole> UserRoleCreatedUserNavigations { get; set; }
        public virtual ICollection<UserRole> UserRoleUpdatedUserNavigations { get; set; }
        public virtual ICollection<UserRole> UserRoleUsers { get; set; }
    }
}
