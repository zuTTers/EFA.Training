using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFA.Shared
{
    public class PageList<T>
    {
        public List<T> Data { get; set; }
        public int TotalCount { get; set; }
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPage()
        {
            if (PageSize == 0) return 0;
            
            if (TotalCount % PageSize == 0)
            {
                return TotalCount / PageSize;
            }
            else
            {
                return (TotalCount / PageSize) + 1;
            }
            
        }
    }
}
