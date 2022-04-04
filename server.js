const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/myaccountmgmt";
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("assets"));
app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myccountmgmt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Use this to log mongo queries being executed!
//mongoose.set('debug', true);
// routes


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});