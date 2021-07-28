using System;
using System.Reflection;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services;
using Dixit.Domain.Services.Rules;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Dixit.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddCore(this IServiceCollection services)
        {
            services.AddTransient<IScoringRule, BonusRule>();
            services.AddTransient<IScoringRule, StoryTellerRule>();
            services.AddTransient<IScoringRule, CorrectRule>();
            services.AddTransient<IScoreService, ScoreService>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());

            return services;
        }
    }
}
