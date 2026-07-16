import './Header.css';

import Logo from '../../../public/favicon.png';

import LogInIcon from '../../assets/icons/login.png';

import { NavLink } from 'react-router-dom';

const Header = () => {

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