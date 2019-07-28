using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Infrastructure.Configuration
{
    public class AwsConfig
    {
        public string AccessToken { get; set; }
        public string SecretAccess { get; set; }
        public string Endpoint { get; set; }
        public string TableName { get; set; }
    }
}
