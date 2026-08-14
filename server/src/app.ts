import express from "express";
import indexController from "./routes/indexRouter.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", indexController);

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening to port ${PORT}...`);
});
