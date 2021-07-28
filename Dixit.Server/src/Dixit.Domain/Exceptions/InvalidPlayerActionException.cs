using System;
using System.Runtime.Serialization;

namespace Dixit.Domain.Exceptions
{
    public class InvalidPlayerActionException : Exception
    {
        public InvalidPlayerActionException()
        {
        }

        public InvalidPlayerActionException(string message) : base(message)
        {
        }

        public InvalidPlayerActionException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected InvalidPlayerActionException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
