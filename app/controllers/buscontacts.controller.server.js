/*

File name: buscontacts.controller.server.js
Student name: Jason Lo
Student ID: 301234232
Date: October 21, 2022

*/

// This file defines the functions to determine the business contact views and CRUD processing.
// Each route will then leverage one of these
// functions in the render method as the callback

import contactModel from "../models/contacts.server.js";
import { ActiveUser } from "../utils/index.js";

// Display contact page

export function DisplayBusinessContacts(req, res, next) {
  if (ActiveUser(req)) {
    contactModel.find(function (err, contactCollection) {
      if (err) {
        console.error(err);
        res.end(err);
      }

      res.render("index", {
        page: "businesscontacts/contacts",
        businesscontacts: contactCollection,
        activeUser: ActiveUser(req),
      });
    });
  } else {
    res.redirect("/login");
  }
}

// Display add page

export function DisplayAddContacts(req, res, next) {
  res.render("index", {
    page: "businesscontacts/newcontact",
    businesscontacts: {},
    activeUser: ActiveUser(req),
  });
}

// Process new / edit of a contact

export function DisplayEditContacts(req, res, next) {
  let id = req.params.id;

  contactModel.findById(id, (err, contact) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.render("index", {
      page: "businesscontacts/newcontact",
      businesscontacts: contact,
      activeUser: ActiveUser(req),
    });
  });
}

export function ProcessEditContacts(req, res, next) {
  let id = req.params.id;

  let contact = new contactModel({
    _id: req.body.id,
    contactname: req.body.contactname,
    contactnumber: req.body.contactphone,
    contactemail: req.body.contactemail,
  });

  contactModel.updateOne({ _id: id }, contact, (err, Contact) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/buscontacts");
  });
}

export function ProcessAddContacts(req, res, next) {
  let contact = new contactModel({
    contactname: req.body.contactname,
    contactnumber: req.body.contactphone,
    contactemail: req.body.contactemail,
  });

  contactModel.create(contact, (err, Contact) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/buscontacts");
  });
}

export function ProcessContactDelete(req, res, next) {
  let id = req.params.id;

  contactModel.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/buscontacts");
  });
}
