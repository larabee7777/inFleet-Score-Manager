const http = require("http");
const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
let PORT = 3012;
const server = http.createServer(app);

const db = require("./src/config/db.config");
db.sequelize.sync();

require("./src/Routers/SoccerTeams.route")(app);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
