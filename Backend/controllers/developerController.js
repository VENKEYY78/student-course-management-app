// Importing the Developer Model we created in models/Developer.js
// This gives us access to Developer.find(), Developer.create(), 
// "new Developer(...)", etc — all the methods Mongoose provides
// to talk to the "developers" collection in MongoDB.
import Developer from "../models/Developer.js"

// CREATE a new developer
// This function runs when someone sends a POST request to /developers/add-developer
//
// "async" means this function can use "await" inside it to handle
// operations that take time (like talking to the database)
export const createDeveloper = async (request, response) => {
    try {
        // Extracting developerName and developerRole from the request body.
        // Example: if frontend sends { developerName: "Venkat", developerRole: "Backend" },
        // this line pulls both values out into their own variables.
        const { developerName, developerRole } = request.body

        // Basic validation — catch missing fields early with a clear message
        if (!developerName || !developerRole) {
            return response.status(400).json({ message: "developerName and developerRole are required" })
        }

        // Creating a new Developer object in memory (not saved yet!)
        // using the Developer model + the Schema rules we defined.
        const developer = new Developer({
            developerName,
            developerRole
        })

        // Actually saving this developer to the MongoDB database.
        // "await" pauses this function until the save is complete.
        await developer.save()

        // Sending back a success response.
        // Status 201 = "Created" (standard code for successful POST/creation)
        // We send back the saved developer object so frontend
        // can immediately show it (e.g. add it to a list on screen).
        response.status(201).json(developer)

    } catch (error) {
        // If anything goes wrong above (bad data, DB down, etc.),
        // this block runs instead of crashing the server.
        console.log("there is an error:", error)

        // Status 500 = "Internal Server Error" — generic "something broke on our end"
        response.status(500).json({ messege: "Server Error" })
    }
}


// READ / fetch all developers
// This function runs when someone sends a GET request to /developers/get-developers
export const getDevelopers = async (request, response) => {
    try {
        // Developer.find() with no arguments fetches ALL documents
        // from the "developers" collection in MongoDB.
        const developers = await Developer.find()

        // Status 200 = "OK" (standard success code for GET requests)
        // Sending the array of all developers back to the frontend.
        response.status(200).json(developers)

    } catch (error) {
        console.log("there is an error:", error)
        response.status(500).json({ messege: "Server Error" })
    }
}