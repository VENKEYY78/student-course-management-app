

import ButtonComponent from '../ButtonComponent'
import './index.css'

const ChangePasswordCompo = ({
    icon,
    changePwdTitle,
    changePwdPara,
}) => {

    return (
        <>
            <div className='Change-password-container'>
                <span className='change-password-icon'>{icon}</span>
                <div className='change-password-info-container'>
                    <h1 className='change-password-heading'>{changePwdTitle}</h1>
                    <p className='change-password-paragrah'>{changePwdPara}</p>
                </div>
                <ButtonComponent
                    buttonType="button"
                    buttonText="Change Password"
                    className="change-password-button"
                
                />
            </div>
        </>
    );
};

export default ChangePasswordCompo;











