import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3002;

app.set("view engine", "ejs");
app.use(indexRouter);
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
