const express = require("express");
const bodyParser = require("body-parser");
const apiroutes = require("./routes/apiroutes");

let app = express();

app.use(bodyParser.json());

app.use("/api",apiroutes);

app.listen(3001);
console.log("Running in port 3001");