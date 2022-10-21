/*

File name: routes.server.js
Student name: Jason Lo
Student ID: 301234232
Date: October 6th, 2022

*/

// This file imports all the EJS render functionality from the controllers javascript file
// and then sets up the various routes to callback each of the render functions so that
// each page is rendered correctly

import { Router } from "express";

import {
  homePage,
  aboutPage,
  servicePage,
  contactPage,
  projectsPage,
} from "../controllers/controllers.server.js";

const router = Router();

router.get("/", homePage);
router.get("/home", homePage);
router.get("/about", aboutPage);
router.get("/services", servicePage);
router.get("/contact", contactPage);
router.get("/projects", projectsPage);

router.post("/", homePage);

export default router;
