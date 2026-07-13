// Install: npm install mongoose
// Mongoose is used here to define the "shape" (Schema) of a Developer
// document that will be stored in MongoDB.
import mongoose from "mongoose"

// A Schema defines the structure of documents inside a MongoDB collection.
// Think of it like a blueprint — every "Developer" saved to the DB
// must follow this structure.
const developerSchema = new mongoose.Schema({

    // developerName , developerRole
    // (quick note of the two fields this schema will have)

    developerName: {
        type: String,      // value must be text (e.g. "Venkat")
        required: true     // this field is mandatory — can't save without it
    },

    developerRole: {
        type: String,       // value must be text (e.g. "Backend Developer")
        required: true       // this field is mandatory too
    }
})

// mongoose.model() turns our schema into an actual usable Model.
// "Developer" is the name Mongoose uses to:
//   - create a MongoDB collection called "developers" (lowercase + pluralized automatically)
//   - let us run queries like Developer.find(), Developer.create(), etc.
//
// We export this model so controllers (like developerController.js)
// can import it and use it to talk to the database.
export default mongoose.model("Developer", developerSchema)