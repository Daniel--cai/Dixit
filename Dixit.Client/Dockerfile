FROM mhart/alpine-node AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#serve the built app
FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build .
CMD [ "serve", "-s", "."]
