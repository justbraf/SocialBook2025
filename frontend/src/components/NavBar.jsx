import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <>
            {/* Modify this navbar into a Tailwind CSS sytle NavBar */}
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                    Home
                </NavLink>
                <NavLink to="/list" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                    All Contacts
                </NavLink>
                <NavLink to="/addcontact" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                    Add Contact
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                    About Us
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar