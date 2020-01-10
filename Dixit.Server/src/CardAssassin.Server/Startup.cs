using System;
using CardAssassin.Application.Commands;
using CardAssassin.Application.Events;
using CardAssassin.Application.Services;
using CardAssassin.Domain.Interfaces;
using CardAssassin.Domain.Services;
using CardAssassin.Domain.Services.Rules;
using CardAssassin.Infrastructure.Configuration;
using CardAssassin.Infrastructure.Services;
using CardAssassin.Server.RealTime;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace CardAssassin.Server
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
            services.Configure<FaunaDbConfig>(Configuration);
            services.AddSignalR();
            services.AddScoped<IRepository, AwsDynamodbService>();

            services.AddTransient<IRandomGenerator, RandomGenerator>();
            services.AddTransient<ISetupService, SetupService>();
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

