const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://database:27017/afromusic";

const connect = async () => {
  await mongoose
    .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .catch(e=> {
      console.error('Connection error', e.message)
    });
  console.log("Connected to MongoDB: " + dbUrl);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };