using System;
using System.IO;
using System.Reflection;

namespace WebCrawler.Service
{
    public class LogService
    {
        private static LogService loggerInstance = null;
        private LogService()
        {
            LogPath = "";
            FileName = "crawlerlog.txt";
        }
        private string LogPath { get; set; }
        private string FileName { get; set; }

        public static LogService GetInstance()
        {
            if (loggerInstance == null)
            {
                loggerInstance = new LogService();
            }

            return loggerInstance;
        }

        public void AddLog(string source, string message)
        {
            
            string workingPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string fullPath = Path.Combine(workingPath, FileName); 

            if (!File.Exists(fullPath))
            {
                using (StreamWriter sw = File.CreateText(fullPath))
                {
                    sw.WriteLine($"{source} {DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")} Error => {message}");
                }
            }

            using (StreamWriter sw = File.AppendText(fullPath))
            {
                sw.WriteLine($"{source} {DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")} Error => {message}");
            }
        }
    }

}