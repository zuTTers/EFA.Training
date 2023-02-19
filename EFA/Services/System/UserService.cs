using EFA.Shared;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFA.Models;

namespace EFA.Services.System
{
    public class UserService
    {
        public List<ItemForCombo> GetListForCombo(string search, int? value)
        {
            using (EdisDEVContext dbContext = new EdisDEVContext())
            {
                List<ItemForCombo> itemComboList = new List<ItemForCombo>();
                if (!string.IsNullOrEmpty(search))
                {
                    itemComboList = dbContext.Users.
                       OrderByDescending(x => x.UserName).
                       Where(x => x.UserName.Contains(search)).
                       Take(20).
                       ToList().
                       Select(x => new ItemForCombo
                       {
                           DisplayText = x.UserName,
                           Value = x.UserId,
                           FreeText = x.Email

                       }).ToList();
                }
                else if (value.HasValue && value.Value != 0)
                {
                    itemComboList = dbContext.Users.
                      Where(x => x.UserId == value).
                      ToList().
                      Select(x => new ItemForCombo
                      {
                          DisplayText = x.UserName,
                          Value = x.UserId,
                          FreeText = x.Email

                      }).ToList();
                }

                return itemComboList;
            }
        }
        public PageList<UserDTO> GetUserList(UserFilter filter, QueryInfo queryInfo, bool isExport = false)
        {
            using (EdisDEVContext dbContext = new EdisDEVContext())
            {
                var dbQuery = dbContext.Users.OrderByDescending(x => x.UserId).Where(x => 1 == 1);
                int totalCount = 0;

                if (filter != null)
                {
                    if (filter.UserId.HasValue) dbQuery = dbQuery.Where(x => x.UserId == filter.UserId.Value);
                    if (!string.IsNullOrEmpty(filter.UserName)) dbQuery = dbQuery.Where(x => x.UserName.Contains(filter.UserName));
                    if (!string.IsNullOrEmpty(filter.Email)) dbQuery = dbQuery.Where(x => x.Email.Contains(filter.Email));
                    if (!string.IsNullOrEmpty(filter.FirstName)) dbQuery = dbQuery.Where(x => x.FirstName.Contains(filter.FirstName));
                    if (!string.IsNullOrEmpty(filter.LastName)) dbQuery = dbQuery.Where(x => x.LastName.Contains(filter.LastName));
                    if (filter.IsActive.HasValue) dbQuery = dbQuery.Where(x => x.IsActive == filter.IsActive.Value);
                    if (filter.CreatedUser.HasValue) dbQuery = dbQuery.Where(x => x.CreatedUser == filter.CreatedUser.Value);
                    if (filter.LastLoginDate.HasValue) dbQuery = dbQuery.Where(x => x.LastLoginDate >= filter.LastLoginDate.Value);
                    if (filter.LastLoginDate2.HasValue) dbQuery = dbQuery.Where(x => x.LastLoginDate <= filter.LastLoginDate2.Value);
                }

                totalCount = dbQuery.Count();

                if (queryInfo != null)
                {
                    if (!string.IsNullOrEmpty(queryInfo.OrderBy))
                    {
                        string clientOrderByName = queryInfo.OrderBy.StartsWith("-") ? queryInfo.OrderBy.Substring(1) : queryInfo.OrderBy;
                        string orderByName = typeof(User).GetProperties().Where(x => x.Name.ToUpper() == clientOrderByName.ToUpper()).First().Name;

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
                     .Select(x => new UserDTO
                     {
                         UserId = x.UserId,
                         UserName = x.UserName,
                         Email = x.Email,
                         Password = "", //x.Password,
                         FirstName = x.FirstName,
                         LastName = x.LastName,
                         IsActive = x.IsActive,
                         LastLoginDate = x.LastLoginDate,
                         LastLoginIp = x.LastLoginIp,
                         CreatedDate = x.CreatedDate,
                         CreatedUser = x.CreatedUser,
                         CreatedUserText = dbContext.Users.First(y => y.UserId == x.CreatedUser).UserName,
                         UpdatedDate = x.UpdatedDate,
                         UpdatedUser = x.UpdatedUser,
                         UpdatedUserText = dbContext.Users.First(y => y.UserId == x.UpdatedUser).UserName,
                     }).ToList();

                return new PageList<UserDTO> { Data = data, TotalCount = totalCount };

            }
        }

        public UserDTO SaveUser(UserDTO userDTO, UserInfo userInfo)
        {
            User user = new User();
            using (EdisDEVContext dbContext = new EdisDEVContext())
            {
                bool isNewRecord = userDTO.UserId == 0;
                if (isNewRecord)
                {
                    user.CreatedDate = DateTime.Now;
                    user.CreatedUser = userInfo.UserId;
                }
                else
                {
                    user = dbContext.Users.First(x => x.UserId == userDTO.UserId);

                }

                user.UpdatedDate = DateTime.Now;
                user.UpdatedUser = userInfo.UserId;

                user.UserName = userDTO.UserName;
                user.Email = userDTO.Email;
                // Password = "", //x.Password,
                user.FirstName = userDTO.FirstName;
                user.LastName = userDTO.LastName;
                user.IsActive = userDTO.IsActive;
                user.LastLoginDate = userDTO.LastLoginDate;
                user.LastLoginIp = userDTO.LastLoginIp;

                if (isNewRecord)
                {
                    dbContext.Users.Add(user);
                }

                dbContext.SaveChanges();

                userDTO.UserId = user.UserId;
            }

            return userDTO;
        }


        public void DeleteUser(UserDTO userDTO)
        {
            using (EdisDEVContext dbContext = new EdisDEVContext())
            {
                var user = dbContext.Users.FirstOrDefault(x => x.UserId == userDTO.UserId);
                if (user != null)
                {
                    dbContext.Users.Remove(user); ;
                    dbContext.SaveChanges();
                }
            }
        }

        public List<UserRoleInfo> GetRoleInfo(int userId)
        {
            using (EdisDEVContext dbContext = new EdisDEVContext())
            {
                var userRoles = dbContext.UserRoles.Where(x => x.UserId == userId).Select(x => x.RoleId).ToList();

                var roles = dbContext.Roles.ToList();

                List<UserRoleInfo> userRoleInfo = new List<UserRoleInfo>();

                roles.ForEach(x =>
                {
                    userRoleInfo.Add(new UserRoleInfo()
                    {
                        UserId = userId,
                        RoleId = x.RoleId,
                        RoleDesc = x.RoleDesc,
                        RoleName = x.RoleName,
                        IsUserRole = userRoles.Any(y => y == x.RoleId)
                    });
                });

                return userRoleInfo;
            }
        }
    }


    public class UserDTO
    {
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
        public string CreatedUserText { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UpdatedUser { get; set; }
        public string UpdatedUserText { get; set; }
    }

    public class UserFilter
    {
        public int? UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public DateTime? LastLoginDate2 { get; set; }
        public string LastLoginIp { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? CreatedDate2 { get; set; }
        public int? CreatedUser { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public DateTime? UpdatedDate2 { get; set; }
        public int? UpdatedUser { get; set; }
    }

    public class UserRoleInfo
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public String RoleName { get; set; }
        public String RoleDesc { get; set; }
        public Boolean IsUserRole { get; set; }

    }
}
