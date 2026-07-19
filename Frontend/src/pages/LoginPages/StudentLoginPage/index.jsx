import { useState } from 'react';

import LoginWelcomeMsg from '../../../components/LoginPageComponents/LoginWelcomeMsg';
import InputComponent from '../../../components/LoginPageComponents/InputComponent';
import DefaultPasswordInfo from '../../../components/LoginPageComponents/DefaultPasswordInfo';
import ChangePasswordCompo from '../../../components/LoginPageComponents/ChangePasswordCompo';
import ButtonComponent from '../../../components/LoginPageComponents/ButtonComponent';

import './index.css'
import { PiStudentBold } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { HiEye, HiEyeSlash } from "react-icons/hi2";


const StudentLoginPage = () => {
    const [studentName, setStudentName] = useState("");
    const [studentEmailID, setStudentEmailID] = useState("");
    const [studentPassword, setStudentPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const StudentLoginDetails = (e) => {
        e.preventDefault();

        if (!studentName || !studentEmailID || !studentPassword) {
            setErrorMessage("Please fill in all the fields.");
            return;
        }

        setErrorMessage("");

        const studentDetails = {
            studentName,
            studentEmailID,
            studentPassword
        };
        console.log(studentDetails);
        setStudentName("");
        setStudentEmailID("");
        setShowPassword("");
   }

    return (
        <>
            <div className="student-login-main-page">
                <div className='ABC-college-branding-container'>
                    <img
                        src='https://res.cloudinary.com/dv0v9hk6g/image/upload/v1784353463/student_login_feature_page_ulg4ls.png'
                        className='student-portel-login-image'
                        alt='studentPortelImage'
                    />
                </div>
                <div className='student-login-card-container'>
                    <LoginWelcomeMsg
                        AdminIcon={<PiStudentBold />}
                        title="Student Login!"
                        welcomeMsg="Welcome back! Please Login To Continue"
                    />

                    <form className='student-login-form-details-container' onSubmit={StudentLoginDetails}>
                        <InputComponent
                            label="Student Name"
                            id="StudentName"
                            type="text"
                            placeholder="Enter Student Name"
                            icon={<FaUser />}
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                        <InputComponent
                            label="Student Email ID"
                            id="StudentEmailID"
                            type="email"
                            placeholder="Enter Student Email ID"
                            icon={<MdOutlineMail />}
                            value={studentEmailID}
                            onChange={(e) => setStudentEmailID(e.target.value)}
                        />
                        <InputComponent
                            label="Password"
                            id="studentPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            icon={<MdLockOutline />}
                            value={studentPassword}
                            onChange={(e) => setStudentPassword(e.target.value)}
                            rightIcon={showPassword ? <HiEyeSlash /> : <HiEye />}
                            onRightIconClick={() => setShowPassword(!showPassword)}
                        />
                        <ButtonComponent
                            buttonType="submit"
                            buttonText="Login"
                            className="student-login-button"
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
                        changePwdTitle="New Student? Change Default Password"
                        changePwdPara="
                            if this is your first time login, please change
                            your default password to secure your account."
                    />
                </div>

            </div>
        </>
    );
};

export default StudentLoginPage;
















