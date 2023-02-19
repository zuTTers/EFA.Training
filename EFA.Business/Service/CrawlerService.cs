using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using Newtonsoft.Json;
using WebCrawler.Model;

namespace WebCrawler.Service
{
    class CrawlerService
    {
        public string baseUrl = "http://localhost:13003/api/WebCrawler/";
        public string token = "4267CD55-6230-4EAF-9411-969C127C97F5";

        public ReturnInfo PostProductInfos(List<ProductInfo> productInfos)
        {
            ReturnInfo returnInfo = new ReturnInfo();
            returnInfo.IsSuccess = false;

            try
            {
                string requestUrl = baseUrl + "PostProducts";
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(requestUrl);
                request.Headers.Add("Authorization", "Bearer " + token);
                request.ContentType = "application/json";
                request.Method = "POST";
                request.Timeout = 10 * 60 * 1000;
                string jsonData = JsonConvert.SerializeObject(productInfos, Formatting.None);


                Stream requestStream = request.GetRequestStream();
                byte[] bytes = System.Text.Encoding.UTF8.GetBytes(jsonData);
                requestStream.Write(bytes, 0, bytes.Length);
                requestStream.Close();

                var response = request.GetResponse();
                returnInfo.IsSuccess = true;
                returnInfo.Message = "OK";
            }
            catch (Exception ex)
            {
                returnInfo.Error = ex.ToString();
                returnInfo.IsSuccess = false;
            }

            return returnInfo;
        }
    }

    public class ReturnInfo
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public string Error { get; set; }
        public object ResultData { get; set; }
    }
}
