using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;

namespace WebCrawler
{
    public abstract class ProductListExtractor
    {
        protected string URL { get; set; }
        protected string BaseURL { get; set; }
        protected int PageSize { get; set; }
        protected string CategoryPageFormatted { get; set; } 
        protected bool IsUsedRelativePath { get; set; }
        List<string> ProductPageUrls = new List<string>();
        public ProductListExtractor(string url)
        {
            URL = url;
            IsUsedRelativePath = true;
        }
        public abstract int GetTotalProductCount(string htmlData);
        public virtual  List<string> DownloadAndGetUlrs(string url)
        {
            string htmlData = WebRequestHelper.GetRequestByURL(url);
            return FindAllProductUrls(htmlData);
        }
        public abstract List<string> FindAllProductUrls(string htmlData);
        public virtual List<string> GetAllPageUrls()
        {
            List<string> allURLS = new List<string>();
            string htmlData = WebRequestHelper.GetRequestByURL(URL);
            int totalCount = GetTotalProductCount(htmlData);
            int totalPages = totalCount / PageSize;
            if (totalCount % PageSize != 0) totalPages += 1;

            var newUlrs = FindAllProductUrls(htmlData);
            allURLS.AddRange(newUlrs);

            for (int i = 2; i <= totalPages; i++)
            {
                Thread.Sleep(2000);
                string pageHtmlData = WebRequestHelper.GetRequestByURL(BaseURL + string.Format(CategoryPageFormatted , i.ToString()));
                newUlrs = FindAllProductUrls(pageHtmlData);
                allURLS.AddRange(newUlrs);
            }

            return allURLS;
        }
        public List<string> GetAllProductURLs()
        {
            string htmlData = WebRequestHelper.GetRequestByURL(URL);
            List<string> ulrs = FindAllProductUrls(htmlData);
            return ulrs;
        }
        public abstract IProductPageExtractor GetPageExtractor(string HTMLData, string url);
       

    }
}
