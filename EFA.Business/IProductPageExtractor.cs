using System;
using System.Collections.Generic;
using System.Text;
using WebCrawler.Model;

namespace WebCrawler
{
    public interface IProductPageExtractor
    {
        string GetBrandName();
        string GetProductName();
        decimal GetPrice();
        string GetDescription();
        bool IsStockExist();
        string GetVolume();
        List<ProductInfo> GetAllProductInfo();

    }
}
