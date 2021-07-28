using System;
using Dixit.Application.Services;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Serilog;
using Dixit.Infrastructure.Data.Mapping;

namespace Dixit.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            // services.Configure<FirestoreConfig>(configuration.GetSection("Firestore"));

            services.AddTransient<ILobbyMapper, LobbyMapper>();
            services.AddTransient<IDataMapper<Domain.Aggregates.Lobby, Data.Model.Lobby>, LobbyMapper>();

            services.AddTransient(typeof(INoSqlClient<>), typeof(FirestoreClient<>));

            services.AddScoped<ILobbyRepository, LobbyRepository>();
            services.AddScoped<IPlayerConnectionRepository, PlayerConnectionRepository>();

            services.AddSingleton<ILoggerFactory>(_ => new Serilog.Extensions.Logging.SerilogLoggerFactory(
                new LoggerConfiguration()
                    .ReadFrom.Configuration(configuration)
                    .Enrich.FromLogContext()
                    .CreateLogger()
            ));

            return services;
        }
    }
}
