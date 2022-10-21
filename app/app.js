/*

File name: Styles.css
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022

*/

// This file consolidates the various components of the website into a functioning express app.
// The key elements of this file is to join the routes that have been established in routes.server.js
// with the actual views that have been created in EJS

// Import third party Modules

import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

// Set dirname variable
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import routes
import router from "./routes/routes.server.js";

// Build the app server
const app = express();

// Set view engine to EJS
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// Use Routes
app.use("/", router);

export default app;
