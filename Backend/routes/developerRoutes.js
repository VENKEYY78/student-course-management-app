// Install: npm install express
// We need Express here specifically to use its Router feature,
// which lets us define routes in a separate file instead of
// cramming everything into server.js
import express from "express"

// Importing all functions from our developerController.js file.
// "* as developerController" means we get ALL exported functions
// bundled into one object, so we can call them like
// developerController.createDeveloper, developerController.getDevelopers, etc.
import * as developerController from "../controllers/developerController.js"

// Creates a mini Express app just for routing.
// Think of it as a separate "mini server" for developer-related routes,
// which we'll later plug into the main app using app.use("/developers", router)
const router = express.Router()

// HTTP Methods quick reference:
// POST   -> used to CREATE new data (e.g. adding a new developer)
// GET    -> used to READ/fetch existing data
// PUT    -> used to UPDATE existing data
// DELETE -> used to DELETE existing data

// Route: POST /developers/add-developer
// When frontend sends a POST request to this URL,
// it runs the createDeveloper function from our controller,
// which handles the actual logic of saving a new developer to the DB.
router.post("/add-developer", developerController.createDeveloper)

// Route: GET /developers/get-developers
// When frontend sends a GET request to this URL,
// it runs the getDevelopers function from our controller,
// which fetches and returns all developers from the DB.
router.get("/get-developers", developerController.getDevelopers)

// Exporting this router so it can be imported and used in server.js
// (we already saw this: app.use("/developers", developerRoutes))
export default router