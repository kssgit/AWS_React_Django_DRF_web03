const { createProxyMiddleware } = require("http-proxy-middleware"); // yarn add http-proxy-middleware --save

module.exports = function (app) {
  app.use(
    "/api/question/",
    createProxyMiddleware({
      target: "http://localhost:8000/",
      changeOrigin: true,
    })
  );
};
