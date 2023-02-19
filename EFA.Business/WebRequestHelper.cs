using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;

namespace WebCrawler
{
    public class WebRequestHelper
    {
        public static string GetRequestByURL(string url)
        {
            var request = WebRequest.Create(url);
            request.Method = "GET";
            request.Timeout = 60000;

            using var webResponse = request.GetResponse();
            using var webStream = webResponse.GetResponseStream();
            using var reader = new StreamReader(webStream);
            var data = reader.ReadToEnd();

            return data;
        }
    }
}
