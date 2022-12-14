/*

File name: Styles.css
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022
Updated: October 21, 2022

*/

// This file consolidates the various components of the website into a functioning express app.
// The key elements of this file is to join the routes that have been established in routes.server.js
// with the actual views that have been created in EJS

// Latest updates:
//  - Importing Mongoose to implement functionality for Mongo DB
//  - importing passport, passportlocal, flash for authentication functionality

// Import third party Modules

import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import passportLocal from "passport-local";
import flash from "connect-flash";

// Set dirname variable
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import routes
import router from "./routes/routes.server.js";

// Build the app server
const app = express();

// Connect to MongoDB

import { Secret, MongoURI } from "../config/config.js";

mongoose.connect(MongoURI);
const db = mongoose.connection;

db.on("open", () => console.log("Connected to Mongo"));
db.on("error", () => console.log("Error connecting to mongo"));

/* Authentication steps 
    - local strategy
    - import user model
    - manage express session
    - setup flash
    - initialize passport
    - implement auth strategy
    - serailization and deserialization
*/

let localStrategy = passportLocal.Strategy;

import User from "./models/users.server.js";

app.use(
  session({
    secret: Secret,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
