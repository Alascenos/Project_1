import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar mt-5 mx-5 justify-content-between">
            <h1 className='float-start h1_E'>Extensions List</h1>
            <ul className="nav-links">
                <li className='me-2'>
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active rounded-4 p-1 px-3" : "nav-link rounded-4 p-1 px-3"} 
                        to='/'>
                        All
                    </NavLink>
                </li>
                <li className='me-2'>
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active rounded-4 p-1 px-3" : "nav-link rounded-4 p-1 px-3"} 
                        to='/Active'>
                        Active
                    </NavLink>
                </li>
                <li className='me-2'>
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active rounded-4 p-1 px-3" : "nav-link rounded-4 p-1 px-3"} 
                        to='/Inactive'>
                        Inactive
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};