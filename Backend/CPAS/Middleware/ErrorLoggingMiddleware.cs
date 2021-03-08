using Microsoft.AspNetCore.Http;
using NLog;
using NLog.Web;
using System;
using System.Threading.Tasks;

namespace CPAS.API.Middleware
{
    public class ErrorLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly Logger logger;

        public ErrorLoggingMiddleware(RequestDelegate next)
        {
            logger = NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception e)
            {
                logger.Error(e, ToString());

                throw;
            }
        }
    }
}
