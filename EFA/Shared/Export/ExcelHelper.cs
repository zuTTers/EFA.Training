using EFA.Shared.Caching;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EFA.Shared.Export
{
    public class ExcelHelper
    {
        public static byte[] CreateExcelFromList<T>(List<T> dataList, List<ColumnInfo> columnInfos)
        {

            using (var package = new ExcelPackage())
            {
                var worksheet = package.Workbook.Worksheets.Add("Sheet1");
                int rowCount = dataList.Count();
                var props = typeof(T).GetProperties().Where(x => columnInfos.Select(y => y.Prop.ToUpperInvariant()).Any(z => z == x.Name.ToUpperInvariant())).ToList();
                for (int row = 1; row <= rowCount + 1; row++)
                {

                    if (row == 1)
                    {
                        for (int j = 0; j < props.Count; j++)
                        {
                            worksheet.Column(j + 1).AutoFit();
                            worksheet.Cells[row, j + 1].Value = columnInfos.First(x => x.Prop.ToUpperInvariant() == props[j].Name.ToUpperInvariant()).LocalText;
                            worksheet.Cells[row, j + 1].AddComment(props[j].PropertyType.Name, props[j].Name);
                        }
                    }
                    else
                    {
                        for (int j = 0; j < props.Count; j++)
                        {
                            worksheet.Cells[row, j + 1].Value = ((object)dataList[row - 2]).GetType().GetProperty(props[j].Name).GetValue(dataList[row - 2], null);
                            if (props[j].PropertyType.Name == "DateTime")
                            {
                                if (worksheet.Cells[row, j + 1].Value != null)
                                {
                                    worksheet.Cells[row, j + 1].Value = ((DateTime)worksheet.Cells[row, j + 1].Value).ToString("yyyy-MM-dd HH:mm:ss");
                                }
                            }
                        }
                    }
                }

                return package.GetAsByteArray();
            }
        }

        public static string AddListAsExcelToCache<T>(List<T> dataList, List<ColumnInfo> columnInfos)
        {
            var excelData = CreateExcelFromList<T>(dataList, columnInfos);
            string key = Guid.NewGuid().ToString();
            DownloadCache.AddCacheWithKey(key, excelData, DocumentType.EXCEL);
            return key;
        }
    }
}

