FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

COPY src/Dixit.Application/Dixit.Application.csproj ./src/Dixit.Application/Dixit.Application.csproj
COPY src/Dixit.Domain/Dixit.Domain.csproj ./src/Dixit.Domain/Dixit.Domain.csproj
COPY src/Dixit.Infrastructure/Dixit.Infrastructure.csproj ./src/Dixit.Infrastructure/Dixit.Infrastructure.csproj
COPY src/Dixit.Server/Dixit.Server.csproj ./src/Dixit.Server/Dixit.Server.csproj
COPY tests/Dixit.Tests/Dixit.Tests.csproj ./tests/Dixit.Tests/Dixit.Tests.csproj
RUN ls
RUN ls src/
COPY Dixit.Server.sln ./

RUN dotnet restore

# Copy everything else and build
COPY . ./
WORKDIR /app/src/Dixit.Server
RUN dotnet publish /app/src/Dixit.Server -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
RUN ls 
COPY --from=build-env /app/src/Dixit.Server/out .
ENTRYPOINT ["dotnet", "Dixit.Server.dll"]