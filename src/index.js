const PORT = 1990;
import express from "express";
const app = express();
import connectToMongodb from "./configs/database.config.js";
import indexMiddleware from "./middlewares/index.middleware.js";
// import "dotenv/config";
// const HOST = '0.0.0.0';



indexMiddleware(app);



app.listen(PORT, () => {
  connectToMongodb();
  console.log(`App is currently running on port ${PORT}!`);
});
