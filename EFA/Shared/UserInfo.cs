using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFA.Shared
{
    public class UserInfo
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FirtsName { get; set; }
        public string LastName { get; set; }
        public string SessionId { get; set; }
        public int? EmployeeId { get; set; }
        public List<AuthInfo> AuthInfos {get; set;}
    }

    public class AuthInfo
    {
        public int AuthId { get; set; }
        public int AuthType { get; set; }
        public string AuthCode { get; set; }
        public string AuthDesc { get; set; }
    }
}
