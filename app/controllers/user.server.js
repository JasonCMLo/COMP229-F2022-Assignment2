import express from "express";

// Display login page

export function DisplayLoginPage(req, res, next) {
  res.render("index", { page: "login" });
}
