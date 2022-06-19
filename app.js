const express = require("express");
const app = express();
const path = require("path");
const port = 3030;


app.listen(port, () => console.log("Server running in http://localhost" + port));
