const mongoose = require("mongoose");

function connect() {
  return mongoose.connect("mongodb+srv://admin:123@nodejs-web-mvc.gcpij.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
