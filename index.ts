import exp from "constants";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Base route");
});

app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/post", require("./routes/post"));

app.listen(5000, () => {
  console.log("running on port 5000");
});
