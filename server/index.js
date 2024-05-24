import express from "express";
import connectDB from "./connectDB.js";
import "dotenv/config";
import cors from "cors";
import UserAPI from "./Routes/userRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/v1", UserAPI);

connectDB();

const port = process.env.PORT; // const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
