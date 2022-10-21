import express from "express";

// Display contact page

export function DisplayBusinessContacts(req, res, next) {
  res.render("index", { page: "businesscontacts", businesscontacts: {} });
}
