using Dixit.Core.Interfaces;
using Dixit.Core.SharedKernel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Infrastructure.Data
{
    public class DynamoDbRepository : IRepository
    {
        public T Add<T>(T entity) where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public void Delete<T>(T entity) where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public T GetById<T>(int id) where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public List<T> List<T>() where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity) where T : BaseEntity
        {
            throw new NotImplementedException();
        }
    }
}
