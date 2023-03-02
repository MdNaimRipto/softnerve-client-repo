import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi"
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className="nav-container container mx-auto px-4 sticky top-0 bg-white">
            <div className="responsive-container">
                <Link to="/" className="nav-logo">
                    <img src="https://i.ibb.co/9qxzD1L/halodoc-logo.webp" alt="" />
                </Link>
                <div
                    onClick={() => { setMenu(!menu) }}
                    className="cursor-pointer block lg:hidden text-2xl py-2 lg:py-0">
                    {
                        !menu ? <FiMenu /> : <GrClose />
                    }
                </div>
            </div>
            <div className={`menu-container py-3 lg:py-0 bg-white absolute lg:static top-[75px] duration-500 
            ${!menu ? `left-[-1000px]` : `left-0`}`}>
                <ul className="menu-lists px-4 font-semibold">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/patients'}>Patients</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Article</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Application</Link>
                    </li>
                    <li>
                        <Link to={'/'}>History</Link>
                    </li>
                </ul>
                <div className="w-full lg:w-[15%] xl:w-[12%] px-4 lg:px-0 pt-4 lg:py-0">
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;