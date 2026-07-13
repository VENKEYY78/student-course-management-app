// Install: npm install express
// Express.js is a minimal and flexible web framework for Node.js.
// It simplifies building web servers and REST APIs by providing
// features like routing, middleware support, and easy request/response handling.
import express from "express"

// Install: npm install dotenv
// dotenv loads variables from your .env file into process.env
// so you can use things like process.env.MONGO_URL and process.env.PORT
// instead of hardcoding secrets directly in the code.
import dotenv from "dotenv"

// Install: npm install mongoose
// Mongoose is an ODM (Object Data Modeling) library for MongoDB.
// It lets us define Schemas/Models (like User, Course, Enrollment)
// and interact with the database using simple JavaScript methods
// instead of writing raw MongoDB queries.
import mongoose from "mongoose"

// Install: npm install cors
// CORS = Cross-Origin Resource Sharing.
// Our frontend (React, running on a different port like 5173)
// needs permission to talk to this backend (running on a different port like 8000).
// This middleware allows that cross-origin communication.
import cors from "cors"

// This imports our custom-made routes file for developer-related APIs.
// Basically it's importing all the endpoints (URLs) we defined
// in routes/developerRoutes.js, so we can use them in this file.
import developerRoutes from './routes/developerRoutes.js'

// This actually loads/activates the .env file.
// Without calling this, process.env.MONGO_URL etc. would be undefined.
dotenv.config()

// This creates our Express application.
// "app" is the main object we'll use to configure our server
// (add middleware, define routes, start listening, etc.)
const app = express()

// Middleware: runs cors() on every incoming request,
// allowing requests from other origins (like our React frontend).
app.use(cors())

// Middleware: allows Express to automatically parse incoming JSON
// request bodies into a JavaScript object, available as req.body.
// Without this, req.body would be undefined when frontend sends JSON data.
app.use(express.json())

// Connecting to our MongoDB database using the connection string
// stored in .env as MONGO_URL.
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        // Runs only if the connection succeeds
        console.log("MongoDB Connected Successfully")
    })
    .catch((error) => {
        // Runs only if the connection fails (wrong URL, no internet, DB down, etc.)
        console.log("Error", error)
    })

// Setting the port our server will run on.
// It first checks .env for a PORT value; if not found, defaults to 8000.
const PORT = process.env.PORT || 8000

// Registering our developer routes.
// Any request that starts with "/developers" (e.g. /developers/all, /developers/:id)
// will be handled inside developerRoutes.js
app.use("/developers", developerRoutes)

// Starts the server and makes it listen for requests on the given PORT.
// The callback runs once the server successfully starts.
app.listen(PORT, () => {
    console.log(`Server Started and running at ${PORT}`)
})