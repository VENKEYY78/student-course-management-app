import './Header.css';

import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets/favicon.png'

import LogInIcon from '../../../assets/icons/login.png';

import { NavLink } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className='header'>
                <div className='logo-section'>
                    <NavLink to="/"><img src={Logo} alt="logo" width={50} height={55} /></NavLink>
                    <div className='clg-name'>
                        <p>ABC College</p>
                        <p>learn. grow. succeed</p>
                    </div>
                </div>

                <div className='nav-pages'>
                    <button type='button' className='admin-navigate-link' onClick={() => navigate("/Admin_Login_Page")}>Admin</button>
                    <button type='button' className='student-navigate-link' onClick={() => navigate("/Student_Login_page")}>Student</button>
                    <NavLink to="/login" className="login-btn">
                        <img src={LogInIcon} alt="user-logo" width={20} height={20} />
                        Login
                    </NavLink>
                </div>
            </div>
        </>
    );
}
export default Header;