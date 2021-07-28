using Dixit.Application;
using Dixit.Infrastructure;
using Dixit.Server.RealTime;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

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
            services.AddCore();
            services.AddInfrastructure(Configuration);
            services.AddServer();
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

