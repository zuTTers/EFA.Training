using System;
using System.Collections.Generic;
using System.Text;

namespace WebCrawler.Factories
{
    public class CrawlerJobFactory
    {
        private static CrawlerJobFactory _instance = null;
        private CrawlerJobFactory()
        {
        }

        public static CrawlerJobFactory Instance()
        {
            if (_instance == null)
                _instance = new CrawlerJobFactory();
            return _instance;
        }

        public CrawlerJob GetCrawlerJob()
        {
            return new CrawlerJob();
        }
    }
}
