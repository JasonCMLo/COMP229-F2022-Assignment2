/*

File name: controllers.server.js
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022
Last Update: October 21, 2022

Updates:
 - Incorporate Auth

*/

// This file defines the functions to determine which view to render. Each route will then leverage one of these
// functions in the render method as the callback

import { ActiveUser } from "../utils/index.js";

export function homePage(req, res, next) {
  res.render("index", { page: "home", activeUser: ActiveUser(req) });
}

export function aboutPage(req, res, next) {
  res.render("index", { page: "about", activeUser: ActiveUser(req) });
}

export function contactPage(req, res, next) {
  res.render("index", { page: "contact", activeUser: ActiveUser(req) });
}

export function servicePage(req, res, next) {
  res.render("index", { page: "services", activeUser: ActiveUser(req) });
}

export function projectsPage(req, res, next) {
  res.render("index", { page: "projects", activeUser: ActiveUser(req) });
}
