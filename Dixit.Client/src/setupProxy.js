const proxy = require("http-proxy-middleware");
const URI = "http://dixit.danielcai.test:30000";
module.exports = function(app) {
  const apiProxy = proxy("/app/api", {
    target: URI,
    secure: false,
    changeOrigin: true
  });
  const wsProxy = proxy("/app/lobbyevents", {
    ws: true,
    target: URI,
    secure: false,
    changeOrigin: true
  });

  app.use(apiProxy);
  app.use(wsProxy);
};
