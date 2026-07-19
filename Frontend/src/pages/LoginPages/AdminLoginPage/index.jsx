
import { useState } from 'react';


import CollegeBranding from '../../../components/LoginPageComponents/CollegeBranding';
import LoginPortelFeaturesSection from '../../../components/LoginPageComponents/LoginPortelFeaturesSection';
import LoginWelcomeMsg from '../../../components/LoginPageComponents/LoginWelcomeMsg';
import InputComponent from '../../../components/LoginPageComponents/InputComponent'
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { HiEye, HiEyeSlash } from "react-icons/hi2";






import './index.css'
import ButtonComponent from '../../../components/LoginPageComponents/ButtonComponent';
import ChangePasswordCompo from '../../../components/LoginPageComponents/ChangePasswordCompo';
import DefaultPasswordInfo from '../../../components/LoginPageComponents/DefaultPasswordInfo';




const AdminLoginPage = () => {
    const [adminName, setAdminName] = useState("");
    const [adminEmailID, setAdminEmailID] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const AdminLoginDetails = (e) => {
        e.preventDefault();

        if (!adminName || !adminEmailID || !adminPassword) {
            setErrorMessage("Please fill in all the fields.");
            return;
        }

        setErrorMessage("");

        const adminDetails = {
            adminName,
            adminEmailID,
            adminPassword
        };
        console.log(adminDetails);
        setAdminName("");
        setAdminEmailID("");
        setAdminPassword("");
    };
    

    return (
        <>
            <div className='Admin-login-page-main-container'>
                <div className='ABC-college-branding-and-login-details'>
                    <div className='ABC-college-Admin-feature-section-and-branding'>
                        <CollegeBranding />
                    </div>
                    <div className='Admin-login-form-card-container'>
                        <LoginWelcomeMsg
                            AdminIcon={<MdAdminPanelSettings />}
                            title="Admin Login"
                            welcomeMsg="Welcome back! Please login to continue"
                        />

                        <form className='admin-login-form-details-container' onSubmit={AdminLoginDetails}>
                            <InputComponent
                                label="Admin Name"
                                id="AdminName"
                                type="text"
                                placeholder="Enter Admin Name"
                                icon={<FaUser />}
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                            />
                            <InputComponent
                                label="Admin Email ID"
                                id="AdminEmailID"
                                type="email"
                                placeholder="Enter Admin Email ID"
                                icon={<MdOutlineMail />}
                                value={adminEmailID}
                                onChange={(e) => setAdminEmailID(e.target.value)}
                            />
                            <InputComponent
                                label="Password"
                                id="AdminPassword"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                icon={<MdLockOutline />}
                                value={adminPassword}
                                onChange={(e) => setAdminPassword(e.target.value)}
                                rightIcon={showPassword ? <HiEyeSlash /> : <HiEye />}
                                onRightIconClick={() => setShowPassword(!showPassword)}
                            />
                            <ButtonComponent
                                buttonType="submit"
                                buttonText="Login"
                                className="Admin-login-button"
                            />
                            <p className='login-error-msg'>{errorMessage}</p>
                        </form>

                        <div className="horizontal-line">
                            <hr className="line" />
                            <span className="or">OR</span>
                            <hr className="line" />
                        </div>


                        <ChangePasswordCompo
                            icon={<BsShieldLock />}
                            changePwdTitle="New Admin? Change Default Password"
                            changePwdPara="
                            if you are a newly added admin, please change
                            your default password to secure your account" 
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLoginPage;























