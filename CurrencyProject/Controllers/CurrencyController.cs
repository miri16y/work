using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using System.Xml;

namespace CurrencyProject.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "http://mywebclient.azurewebsites.net", headers: "*", methods: "*")]
    [ApiController]
    [Route("[controller]")]
    public class CurrencyController : ControllerBase
    {

        [HttpGet]
        public string Get()
        {
            //Get xml from url
            string getCurrrncy = "https://www.boi.org.il/currency.xml";
            var response = new WebClient().DownloadString(getCurrrncy);

            //Get Format XML
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(response);

            //Convert XML to JSON
            string json = JsonConvert.SerializeXmlNode(doc);

            //get only Currency
            var obj = JObject.Parse(json);
            var currencies = Convert.ToString(obj["CURRENCIES"]["CURRENCY"]);
            return currencies;

        }
    }
}
