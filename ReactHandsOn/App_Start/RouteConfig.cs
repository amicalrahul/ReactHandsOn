using ReactHandsOn.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ReactHandsOn
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // route attributes before areas
            routes.MapMvcAttributeRoutes();

            // area registration
            AreaRegistration.RegisterAllAreas();

            routes.LowercaseUrls = true;

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("bundles/{package}");
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
