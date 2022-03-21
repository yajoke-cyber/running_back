const app = require("./app/app");
//引入dotenv
require("./app/database");
require("dotenv").config({ path: ".env" });
const { APP_PORT } = process.env;
app.listen(APP_PORT, () => {
  console.log(`在${APP_PORT}端口上开启服务`);
});
