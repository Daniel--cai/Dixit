using System;
namespace CardAssassin.Infrastructure.Configuration
{
    public class FaunaDbConfig
    {
        public string Endpoint { get; set; }
        public string Secret { get; set; }
        public string ConnectionIndex { get; set; }
        public string SessionIndex { get; set; }
    }
}
