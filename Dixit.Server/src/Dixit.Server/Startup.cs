using System;
using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services;
using Dixit.Domain.Services.Rules;
using Dixit.Infrastructure.Configuration;
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

            services.AddScoped(typeof(INoSqlClient<>), typeof(FirestoreClient<>));
            services.AddScoped<IRepository, FirestoreService>();

            services.AddTransient<IScoringRule, BonusRule>();
            services.AddTransient<IScoringRule, StoryTellerRule>();
            services.AddTransient<IScoringRule, CorrectRule>();
            services.AddTransient<IScoreService, ScoreService>();
            services.AddMediatR(typeof (CreateLobbyCommand), typeof(LobbyJoinedEvent),typeof(LobbyEventsClientDispatcher));

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

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
                app.UseCors("MyPolicy");
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

