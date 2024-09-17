const express = require("express");
const app = express();

const PORT = 9000;
app.get("/", (req, res) => res.send("this file is dockerized!"));
app.listen(PORT, () => console.log("listening on port", PORT));
