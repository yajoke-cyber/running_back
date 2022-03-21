var express = require("express");
// const app = require("../app/app");
// var indexRouter = require("../routes/index");
// var usersRouter = require("../routes/users");
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
/* GET home page. */
const fs = require("fs");
const useRoutes = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    const filename = file.slice(0, file.length - 3);
    if (file !== "index.js") {
      const method = require(`./${file}`);
      app.use(`/${filename}`, method);
    }
  });
};

module.exports = useRoutes;
