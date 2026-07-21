import './Header.css';

import dafaultProfile from '../../assets/icons/default_pic.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function Header({title,subtitle}) {
    return (
        <>
            <div className='stu-db-header'>
                    <div className='welcome-msg'>
                        <p>{title}</p>
                        <p>{subtitle}</p>
                    </div>
                <div className='profile-snapshort'>
                    <NavLink to='/student-notifications' className='notification-info'><IoIosNotificationsOutline size={40} /></NavLink>
                    <NavLink to='/profile' className='prifile'>
                        <img src={dafaultProfile} alt="profile-pic" />
                        <span className='user-info'>
                            <p>User Name</p>
                            <p>role</p>
                        </span>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;