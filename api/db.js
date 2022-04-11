const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost/mern";

exports.connect = async () => {
  await mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connecting ...");
    })
    .catch(e => {
      console.log("while connecting ..., ", e.message);
    });

  mongoose.connection
    .on("connected", () => {
      console.log(`Connected to the database: ${MONGO_URL}`);
    })
    .on("disconnected", () => {
      console.log(`Disconnected from the database: ${MONGO_URL}`);
    })
    .on("error", error => {
      console.log(`Database connection error: ${MONGO_URL}`, error);
    });
};
