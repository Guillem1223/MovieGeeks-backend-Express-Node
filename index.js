import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/database.js";
import router from "./router.js";

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preFlightContinue: false,
  optionsSuccesStatus: 204,
};

//middelware
app.use(express.json());
app.use(cors(corsOptions));
// routes
app.use(router);

const port = process.env.PORT || 3000;

db()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running: " + port);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to mongoDB", error);
  });
