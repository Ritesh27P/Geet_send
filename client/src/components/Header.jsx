import React from 'react'

import { Logo } from "../assets/img/index"
import { NavLink } from 'react-router-dom'
import { isActiveStyles, isNotActiveStyles } from "../utils/styles"

import { FaCrown } from "react-icons/fa"
import { useSelector } from 'react-redux'





function Header() {
    const data = useSelector(state => state.user.user)
    return (
        <header className="flex items-center w-full p-4 md:py-2 md:px-6">
            <NavLink to={"/"}>
                <img src={Logo} alt="logo" className=' w-16' />
            </NavLink>

            <ul className="flex items-center justify-center ml-7">
                <li className="mx-5 text-lg"><NavLink to={"/home"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
                <li className="mx-5 text-lg"><NavLink to={"/music"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Music</NavLink></li>
                <li className="mx-5 text-lg"><NavLink to={"/primium"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Primium</NavLink></li>
                <li className="mx-5 text-lg"><NavLink to={"/contact"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Contact Us</NavLink></li>
            </ul>


            <div className="flex items-center ml-auto cursor-pointer gap-2 relative">
                <img src="" className="w-12 min-w-[44px] object-cover rounded-full shadow-lg" alt="" />
                <div className="flex flex-col">
                    <p className=" text-textColor text-lg hover:text-headingColor font-semibold">{data?.name ? data.name : "USER"}</p>
                    <p className=" flex items-center gap-2 text-xs text-green-500">{data?.email ? data.email : "Email"}. <FaCrown className="text-sm -ml-1 text-yellow-500"></FaCrown></p>
                </div>
            </div>

        </header>


    )
}

export default Header
