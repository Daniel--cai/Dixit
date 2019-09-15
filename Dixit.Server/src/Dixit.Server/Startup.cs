using System;
using System.Reflection;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Application.SharedKernel;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services;
using Dixit.Domain.Services.Rules;
using Dixit.Infrastructure.Services;
using Dixit.Server.RealTime;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
    
            services.AddSignalR();
            services.AddScoped<IAwsDynamodbClient, AwsDynamodbClient>();
            services.AddScoped<IAwsDynamodbService, AwsDynamodbService>();
            services.AddTransient<IScoringRule, BonusRule>();
            services.AddTransient<IScoringRule, StoryTellerRule>();
            services.AddTransient<IScoringRule, CorrectRule>();
            services.AddTransient<IScoreService, ScoreService>();
            services.AddMediatR(typeof (CreateLobbyCommand), typeof(LobbyJoinedEvent),typeof(LobbyEventsClientDispatcher));

        }

        private static IServiceProvider BuildDependencyInjectionProvider(IServiceCollection services)
        {
            var builder = new ContainerBuilder();

            // Populate the container using the service collection
            builder.Populate(services);

            // TODO: Add Registry Classes to eliminate reference to Infrastructure
            Assembly webAssembly = Assembly.GetExecutingAssembly();
            Assembly coreAssembly = Assembly.GetAssembly(typeof(BaseEntity));
            //Assembly infrastructureAssembly = Assembly.GetAssembly(typeof(EfRepository)); // TODO: Move to Infrastucture Registry
            //builder.RegisterAssemblyTypes(webAssembly, coreAssembly, infrastructureAssembly).AsImplementedInterfaces();

            IContainer applicationContainer = builder.Build();
            return new AutofacServiceProvider(applicationContainer);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
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
            app.UseSignalR(route =>
            {
                route.MapHub<LobbyEventsClientHub>("/lobbyevents");
            });
            app.UseHttpsRedirection();
            
            app.UseMvc();
        }
    }
}

