import mongoose from "mongoose";

function connectToMongodb() {
  mongoose
    .connect(
      "mongodb+srv://chisomsylvia95:september95@cluster0.njalblv.mongodb.net/"
    )
    .then(() => {
      console.log("Mongodb is connected");
    })
    .catch(() => {
      console.error("Error connecting to database");
    });
}


export default connectToMongodb;
