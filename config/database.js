import mongoose from"mongoose";
mongoose.set("strictQuery", true);

// conexion

const db = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connection stablished");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB", error);
    });

export default db;
