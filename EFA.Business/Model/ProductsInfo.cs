using System;
using System.Collections.Generic;

namespace WebCrawler.Model
{
    public class ProductInfo
    {
        public string Site { get; set; }
        public string ProductName { get; set; }
        public string ProductNameOriginal { get; set; }
        public string Barcode { get; set; }
        public string BrandName { get; set; }
        public string VariantName { get; set; }
        public decimal Price { get; set; }
        public string Volume { get; set; }
        public string Type { get; set; }
        public string Gender { get; set; }
        public bool IsStockExist { set; get; }
        public string ProductPageUrl { get; set; }
        public bool IsDataPageUrl { get; set; }

        public List<String> ImgUrls { get; set; }
        public string SessionId { get; set; }

        public DateTime Created_Date { get; set; }
        public int Created_User { get; set; }
        public DateTime Updated_Date { get; set; }
        public int Updated_User { get; set; }
    }
}
