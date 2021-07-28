using System;
using Microsoft.Extensions.DependencyInjection;

namespace Dixit.Server
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServer(this IServiceCollection services)
        {
            services.AddSignalR()
                .AddJsonProtocol(options =>
                {
                    options.PayloadSerializerOptions.WriteIndented = false;
                });

            return services;
        }
    }
}
