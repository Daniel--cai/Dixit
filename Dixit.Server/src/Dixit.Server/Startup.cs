using System;
using AutoMapper;
using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services;
using Dixit.Domain.Services.Rules;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Mapper;
using Dixit.Infrastructure.Profiles;
using Dixit.Infrastructure.Services;
using Dixit.Server.RealTime;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace Dixit.Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddHealthChecks();
            services.Configure<FirestoreConfig>(Configuration.GetSection("Firestore"));
            services.AddSignalR();

            services.AddTransient(typeof(INoSqlClient<>), typeof(FirestoreClient<>));
            
            services.AddScoped<ILobbyRepository, LobbyRepository>();
            services.AddScoped<IPlayerConnectionRepository, PlayerConnectionRepository>();

            services.AddTransient<IScoringRule, BonusRule>();
            services.AddTransient<IScoringRule, StoryTellerRule>();
            services.AddTransient<IScoringRule, CorrectRule>();
            services.AddTransient<IScoreService, ScoreService>();
            services.AddMediatR(typeof (CreateLobbyCommand), typeof(LobbyJoinedEvent),typeof(LobbyEventsClientDispatcher));

            //mapper
            services.AddAutoMapper(typeof(LobbyProfile), typeof(PlayerConnectionProfile));

            services.AddTransient<ILobbyMapper, LobbyMapper>();
            services.AddTransient<IMapper<Domain.Aggregates.Lobby,Infrastructure.Data.Model.Lobby>, LobbyMapper>();

            services.AddSignalR()
            .AddJsonProtocol(options =>
            {
                options.PayloadSerializerOptions.WriteIndented = false;
            });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UsePathBase("/app");
            app.UseRouting();
            app.UseEndpoints(endpoint =>
            {
                endpoint.MapControllers();
                endpoint.MapHealthChecks("/health");
                endpoint.MapHub<LobbyEventsClientHub>("/lobbyevents");
            });
            
            app.UseHttpsRedirection();

  
        }
    }
}

