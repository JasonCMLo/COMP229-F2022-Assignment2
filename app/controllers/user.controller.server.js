/*

File name: user.controller.server.js
Student name: Jason Lo
Student ID: 301234232
Date: October 21, 2022


*/

// This file defines the functions to determine the login views and processing.
// Each route will then leverage one of these
// functions in the render method as the callback

import express from "express";
import passport from "passport";
import { ActiveUser } from "../utils/index.js";

// Display login page

export function DisplayLoginPage(req, res, next) {
  console.log(req.user);

  if (!req.user) {
    res.render("index", { page: "login", activeUser: ActiveUser(req) });
  }

  return res.redirect("/buscontacts");
}

// Login a user

export function ProcessLoginPage(req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      console.err(err);
      res.end(err);
    }

    if (!user) {
      res.redirect("/login");
    }

    req.logIn(user, function (err) {
      if (err) {
        res.render("/");
      } else {
        return res.redirect("/buscontacts");
      }
    });
  })(req, res, next);
}

// Log the user out

export function ProcessLogout(req, res, next) {
  req.logOut(function (err) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    console.log("Succesful logout");
  });

  res.redirect("/");
}
