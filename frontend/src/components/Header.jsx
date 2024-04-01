import React from 'react'
import { Link, NavLink } from  "react-router-dom";
function Header() {
  return (
    <>
    <header className=" bg-white text-gray-700 border-b border-gray-300 sticky top-0 z-10 ">
        <div className="container mx-auto py-4">
            <div className="flex justify-between items-center">
                <div>
                    <Link 
                    to="/"
                    className="text-3xl font-bold ml-16">
                        PDF <span className=' text-orange-700'>Editor</span>
                    </Link>
                </div>
                <nav className=' mr-16'>
                    <ul className="flex space-x-10">
                        <li>
                            <NavLink
                            to="/"
                                className={({isActive}) => `hover:text-orange-700 font-semibold
                                ${isActive ? " text-orange-700" : "text-gray-700"}`}
                                >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/register"
                                className={({isActive}) => ` hover:text-white hover:bg-orange-700  font-semibold border   px-3 py-1 rounded-2xl
                                ${isActive ? "text-white bg-orange-700" : "text-gray-700"}`}>
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/login"
                                className={({isActive}) => ` hover:text-white hover:bg-orange-700  font-semibold border  px-3 py-1 rounded-2xl
                                ${isActive ? "text-white bg-orange-700" : "text-gray-700"}`}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header