import contactModel from "../models/contacts.server.js";

// Display contact page

export function DisplayBusinessContacts(req, res, next) {
  contactModel.find(function (err, contactCollection) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render("index", {
      page: "businesscontacts/contacts",
      businesscontacts: contactCollection,
    });
  });
}

// Display add page

export function DisplayAddContacts(req, res, next) {
  res.render("index", {
    page: "businesscontacts/newcontact",
    businesscontacts: {},
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
