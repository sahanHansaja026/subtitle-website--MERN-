const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const UserRouter = require("./routes/user");
const SubtitleRouter = require("./routes/subtitle");
const SearchRouter = require("./routes/search");

app.use(bodyParser.json());
app.use(cors());


app.use(UserRouter);
app.use(SubtitleRouter);
app.use(SearchRouter);

const port = 9000;
const database = "mongodb://localhost:27017/subtitle";

mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error", err);
  });
