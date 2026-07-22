import { useState } from 'react';


import InputComponent from '../../../components/LoginPageComponents/InputComponent'
import { FaUser } from "react-icons/fa";

import './index.css'

const AddingNewAdmin = () => {
    const [adminName , setAdmninName] = useState("")

    return (
        <>
            <div className='Adding-New-Admin-card-main-container'>
                <h1>Add New Admin</h1>
                <form className='adding-admin-form-container'>
                    <InputComponent
                        label="New Admin Name"
                        id="addewAdmin"
                        type="text"
                        placeholder="Enter New Admin Name"
                        icon={ <FaUser /> }
                        value={adminName}
                        onChange={(e) => setAdmninName(e.target.value)}
                    />
                    <InputComponent />
                    <InputComponent />
                </form>
            </div>
        </>
    );
};

export default AddingNewAdmin;























