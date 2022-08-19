const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB_URI, connectionParams);
    console.log("Connected to the DB Successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to DB");
  }
};
