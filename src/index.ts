import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes";
import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3002;
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(indexRouter);
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
