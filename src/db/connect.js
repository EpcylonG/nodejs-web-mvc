const mongoose = require("mongoose");
const dotenv=require('dotenv');
const config = require("../config/config");

dotenv.config();
/*crear user en mongo
guardar datos usuarios, email, ...
obtener la id del firebase y guardarla en mongo en _id
el firebase ya guarda la password
*/
const ENV=process.env.NODE_ENV || "development";;

function connect() {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
