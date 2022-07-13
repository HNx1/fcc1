let express = require('express');
let app = express();
app.get("/", function(req, res) {
  let absolutePath = __dirname + /views/index.html;
  res.sendFile(absolutePath);
});
console.log("Hello World");




































 module.exports = app;
