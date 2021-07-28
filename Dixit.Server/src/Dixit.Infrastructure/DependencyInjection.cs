using System;
using Dixit.Application.Services;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Mapper;
using Dixit.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace Dixit.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            // services.Configure<FirestoreConfig>(configuration.GetSection("Firestore"));

            services.AddTransient<ILobbyMapper, LobbyMapper>();
            services.AddTransient<IMapper<Domain.Aggregates.Lobby, Data.Model.Lobby>, LobbyMapper>();

            services.AddTransient(typeof(INoSqlClient<>), typeof(FirestoreClient<>));

            services.AddScoped<ILobbyRepository, LobbyRepository>();
            services.AddScoped<IPlayerConnectionRepository, PlayerConnectionRepository>();

            return services;
        }
    }
}
