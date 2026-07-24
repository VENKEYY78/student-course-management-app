import './SideBar.css';

import logo from '../../../public/favicon.png';
import { CiLogout } from "react-icons/ci";

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

import sidebarData from './SidebarData.js';

function SideBar() {

    const [collapsed, setCollapsed] = useState(false);

    const role = "student";
    const menu = sidebarData[role];

    return (
        <>

            <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

                <button
                    className={`toggle-btn ${collapsed ? "left" : "right"}`}
                    onClick={() => setCollapsed(!collapsed)}
                    aria-expanded={!collapsed}
                    aria-label="Toggle navigation menu"
                >
                    <FaBars size={24} color={"#808080"} />
                </button>
                {!collapsed && (
                    <>
                        <div className='sidebar-content'>
                            <div className='sidebar-content'>
                                <NavLink className='sidebar-header' to={'/'}>
                                    <div className='sidebar-logo'>
                                        <img src={logo} alt="logo" width={60} height={70} />
                                    </div>
                                    <div className='sidebar-title'>
                                        <p>ABC College</p>
                                        <p>Student portal</p>
                                    </div>
                                </NavLink>
                                <nav className='nav-pages'>
                                    {menu.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <NavLink key={item.path} to={item.path} className="link">
                                                <Icon size={25} className='link-icon' />
                                                <span>{item.title}</span>
                                            </NavLink>
                                        );
                                    })}
                                </nav>
                                <div className='btn-container'>
                                     <CiLogout color='white' size={20} />
                                    <span><NavLink  to='/' className='logout'>Logout</NavLink></span>
                                </div>

                            </div>

                        </div>
                    </>
                )

                }
            </aside>
        </>
    );
}
export default SideBar;