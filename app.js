const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require("method-override");
require("./config/mongoose");

// setting template engine，
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// (若有)setting static files靜態檔案
app.use(express.static("public"));

// setting body-parser
app.use(express.urlencoded({ extended: true }));

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride("_method"));

// 引用路由器
const routes = require("./routes");
// 將 request 導入路由器
app.use(routes);

app.listen(port, () => {
  console.log(`running on https://localhost:${port}`);
});
