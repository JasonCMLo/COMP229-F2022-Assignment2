/*

File name: controllers.server.js
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022

*/

// This file defines the functions to determine which view to render. Each route will then leverage one of these
// functions in the render method as the callback

export function homePage(req, res, next) {
  res.render("index", { page: "home" });
}

export function aboutPage(req, res, next) {
  res.render("index", { page: "about" });
}

export function contactPage(req, res, next) {
  res.render("index", { page: "contact" });
}

export function servicePage(req, res, next) {
  res.render("index", { page: "services" });
}

export function projectsPage(req, res, next) {
  res.render("index", { page: "projects" });
}
