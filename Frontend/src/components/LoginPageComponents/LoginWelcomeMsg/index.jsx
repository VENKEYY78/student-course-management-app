

import './index.css'

const LoginWelcomeMsg = ({
    AdminIcon,
    title,
    welcomeMsg,
    
}) => {
    return (
        <>
            <div className='login-welocme-message-container'>
                <p className="Admin-icon">{AdminIcon}</p>
                <h1 className='login-portel-name'>{title}</h1>
                <p className='welcome-msg'>{welcomeMsg}</p>
            </div>
        </>
    );
};

export default LoginWelcomeMsg;









