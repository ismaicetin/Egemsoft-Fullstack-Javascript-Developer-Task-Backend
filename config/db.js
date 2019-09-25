const mongoose = require("mongoose");

const dbURI =
  "mongodb://127.0.0.1:27017/egesoft";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Veritabanına baglanıldı");
  },
  err => {
    console.log("Veritabanı hatası: ", err);
  }
);

