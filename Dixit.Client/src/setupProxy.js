const proxy = require("http-proxy-middleware");
const URI = "https://localhost:5001";
module.exports = function(app) {
  const apiProxy = proxy("/api", {
    target: URI,
    secure: false,
    changeOrigin: true
  });
  const wsProxy = proxy("/lobbyevents", {
    ws: true,
    target: URI,
    secure: false,
    changeOrigin: true
  });

  app.use(apiProxy);
  app.use(wsProxy);
};
