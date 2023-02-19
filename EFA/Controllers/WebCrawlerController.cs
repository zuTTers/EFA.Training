﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebCrawlerController : ControllerBase
    {
        private IConfiguration Configuration { get; set; }
        public  WebCrawlerController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        
    }
}
