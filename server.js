/*

File name: Styles.css
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022

*/

// This file creates a server at a specific port, leveraging the app.js file as the callback function (to determine what will be
// served to the end user

import debug from "debug";
debug("comp-229");
import app from "./app/app.js";

import http from "http";

const server = http.createServer(app);

const PORT = normalizePort(process.env.PORT || 3000);
app.set("port", PORT);

server.listen(PORT);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
