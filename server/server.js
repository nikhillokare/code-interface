const express = require("express");
const cors = require("cors");
const apiRouter = require("./api");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
