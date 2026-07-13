// useState is a React Hook that lets a component "remember" values
// between re-renders (e.g. what the user typed into an input box).
import { useState } from 'react';

// Install: npm install axios
// Axios is a library used to make HTTP requests (GET, POST, etc.)
// from the frontend to our backend API — similar to fetch(), but
// with a simpler syntax and better error handling.
import axios from "axios"

// Importing our CSS file so the styles defined there apply to this component.
import './sample.css'

const SampleFolderForTesting = () => {

    // These three lines create "state variables."
    // Each one gives us:
    //   1. a variable to read the current value (developerName)
    //   2. a function to update that value (setDeveloperName)
    // Whenever setDeveloperName is called, React re-renders this component
    // with the new value.
    const [developerName, setDeveloperName] = useState("");
    const [developerRole, setDeveloperRole] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("");

    // This function runs when the form is submitted (Add Developer button clicked).
    // "e" is the event object automatically passed by the browser.
    const AddDevelopers = async (e) => {
        // Prevents the default browser behavior of refreshing the page
        // on form submit (which would lose all our state/data).
        e.preventDefault();

        // Basic validation — don't even try to send the request
        // if required fields are empty. Show an error message instead.
        if (developerName === "") {
            setErrorMsg("Please Mention Developer Name");
            return; // stops the function here, doesn't continue below
        }

        if (developerRole === "") {
            setErrorMsg("Please Mention Developer Role");
            return;
        }

        // Bundling the form data into one object,
        // matching the shape our backend controller expects:
        // { developerName, developerRole }
        const DeveloperDetails = {
            developerName,
            developerRole,
        };

        try {
            // Sending a POST request to our backend's /add-developer route.
            // This matches exactly what we set up in developerRoutes.js
            // and developerController.js on the backend.
            const response = await axios.post(
                "http://localhost:8000/developers/add-developer",
                DeveloperDetails
            );

            console.log("Developer added:", response.data);

            // Clearing the form after a successful submit,
            // so the user can add another developer right away.
            setDeveloperName("");
            setDeveloperRole("");
            setErrorMsg("");

        } catch (error) {
            // Runs if the backend request fails
            // (server down, network issue, validation error, etc.)
            console.log("Error Adding Developer:", error);
            setErrorMsg("Something went wrong. Please try again.")
        }
    };

    return (
        <>
            <div className='sample-main-container'>
                {/* onSubmit={AddDevelopers} runs our function above
                    whenever this form is submitted (button clicked or Enter pressed) */}
                <form className='sample-form-container' onSubmit={AddDevelopers}>

                    <div className='name-container'>
                        <input
                            type='text'
                            placeholder='Developer Name'
                            className='sample-name-text'
                            // "value" makes this a controlled input —
                            // its displayed value always matches our state variable.
                            value={developerName}
                            // Runs every time the user types a character,
                            // updating state with the latest input value.
                            onChange={(e) => setDeveloperName(e.target.value)}
                        />
                    </div>

                    <div className='role-container'>
                        <input
                            type='text'
                            placeholder='Developer Role'
                            className='sample-name-text'
                            value={developerRole}
                            onChange={(e) => setDeveloperRole(e.target.value)}
                        />
                    </div>

                    <div className='sumbit-button-container'>
                        <button type='submit' className='sample-form-sumbit-button'>
                            Add Developer
                        </button>
                        {/* Shows the error message text (if any) below the button.
                            If ErrorMsg is an empty string, nothing visible shows up. */}
                        <p className='error-msg'>{ErrorMsg}</p>
                    </div>

                </form>
            </div>
        </>
    );
};

export default SampleFolderForTesting;