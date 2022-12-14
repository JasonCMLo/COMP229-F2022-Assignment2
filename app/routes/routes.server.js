/*

File name: routes.server.js
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022
Updated: October 21, 2022

Latest updates:
 - Add routes for login and business contacts

*/

// This file imports all the EJS render functionality from the controllers javascript file
// and then sets up the various routes to callback each of the render functions so that
// each page is rendered correctly

import { Router } from "express";

// import the various functions from each controller file

import {
  homePage,
  aboutPage,
  servicePage,
  contactPage,
  projectsPage,
} from "../controllers/controllers.server.js";

import {
  DisplayBusinessContacts,
  DisplayAddContacts,
  ProcessEditContacts,
  ProcessAddContacts,
  DisplayEditContacts,
  ProcessContactDelete,
} from "../controllers/buscontacts.controller.server.js";

import {
  DisplayLoginPage,
  ProcessLoginPage,
  ProcessLogout,
} from "../controllers/user.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

// Link each route to a specific function to expose the appropriate functionality

router.get("/", homePage);
router.get("/home", homePage);
router.get("/about", aboutPage);
router.get("/services", servicePage);
router.get("/contact", contactPage);
router.get("/projects", projectsPage);
router.post("/", homePage);

// business contact functionality

router.get("/buscontacts", AuthGuard, DisplayBusinessContacts);
router.get("/editcontact", AuthGuard, DisplayAddContacts);
router.get("/editcontact/:id", AuthGuard, DisplayEditContacts);
router.get("/deletecontact/:id", AuthGuard, ProcessContactDelete);

router.post("/editcontact", AuthGuard, ProcessAddContacts);
router.post("/editcontact/:id", AuthGuard, ProcessEditContacts);

// login page functionality

router.get("/login", DisplayLoginPage);
router.post("/login", ProcessLoginPage);
router.get("/logout", ProcessLogout);

export default router;
