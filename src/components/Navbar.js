import React, { useState } from 'react';
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaSearch } from 'react-icons/fa';
import { BiSolidMicrophone, BiUserCircle, BiSolidUserCircle, BiSolidRegistered } from "react-icons/bi";
import { MdPrivacyTip, MdNotifications } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    const toggleNotificationDropdown = () => {
        setShowNotificationDropdown(!showNotificationDropdown);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    const handleNotificationOptionClick = (option) => {
        // Handle notification option click here
        console.log(`Notification Option Clicked: ${option}`);
        // Close the dropdown
        setShowNotificationDropdown(false);
    };

    const handleUserOptionClick = (option) => {
        // Handle user option click here
        console.log(`User Option Clicked: ${option}`);
        // Close the dropdown
        setShowUserDropdown(false);
    };

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1360px] py-2 gap-[10px] mx-auto space-x-20'>
            <div className='flex flex-row gap-x-2'>
                <Link to="/">
                    <img src="https://grupverse.com/static/media/logo.3c685cc554a3882f4e85.png" alt="Logo" width={40} height={32} loading="lazy" />
                </Link>
                <p>grupverse</p>
            </div>

            <nav>
                <ul className='text-black flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/">ContactUS</Link>
                    </li>
                    <li>
                        <Link to="/">Help</Link>
                    </li>
                </ul>
            </nav>

            {/* Search bar and icon */}
            <div className="flex items-center rounded p-1 justify-end">
                <div className="border border-black rounded-full p-1 w-48">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none border-none bg-transparent w-ful h-full"
                    />
                </div>
                <div className="flex items-center space-x-2 ml-2">
                    <FaSearch />
                    <BiSolidMicrophone />
                </div>
            </div>

            {/* Notification and user icons */}
            <div className="flex flex-row space-x-4 ">
                <div
                    className="relative group cursor-pointer"
                    onClick={toggleNotificationDropdown}
                    onMouseEnter={toggleNotificationDropdown}
                    onMouseLeave={toggleNotificationDropdown}
                >
                    <MdNotifications className='w-[30px] h-[30px]' />
                    <div
                        className={`${
                            showNotificationDropdown ? 'block' : 'hidden'
                        } absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg`}
                    >
                        {/* Notification content */}
                        <ul className="p-2">
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleNotificationOptionClick('Login')}
                            >
                                <span className="text-black">
                                    <BiUserCircle />
                                </span>
                                <Link to="/login">Login</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleNotificationOptionClick('Register')}
                            >
                                <span className="text-black">
                                    <BiSolidRegistered />
                                </span>
                                <Link to="/signup">Register</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleNotificationOptionClick('Terms & conditions')}
                            >
                                <span className="text-black">
                                    <GrMail />
                                </span>
                                <Link to="/">Terms & conditions</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleNotificationOptionClick('Privacy Policy')}
                            >
                                <span className="text-black">
                                    <MdPrivacyTip />
                                </span>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleNotificationOptionClick(' Settings')}
                            >
                                <span className="text-black">
                                    <AiFillSetting />
                                </span>
                                <Link to="/">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="relative group cursor-pointer"
                    onClick={toggleUserDropdown}
                    onMouseEnter={toggleUserDropdown}
                    onMouseLeave={toggleUserDropdown}
                >
                    <BiSolidUserCircle className='w-[30px] h-[30px]' />
                    <div
                        className={`${
                            showUserDropdown ? 'block' : 'hidden'
                        } absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg`}
                    >
                        {/* User options content */}
                        <ul className="p-2">
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleUserOptionClick('Login')}
                            >
                                <span className="text-black">
                                    <BiUserCircle />
                                </span>
                                <Link to="/login">Login</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleUserOptionClick('Register')}
                            >
                                <span className="text-black">
                                    <BiSolidRegistered />
                                </span>
                                <Link to="/signup">Register</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleUserOptionClick(' Terms & Conditions')}
                            >
                                <span className="text-black">
                                    <GrMail />
                                </span>
                                <Link to="/">Terms & conditions</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleUserOptionClick(' Privacy Policy')}
                            >
                                <span className="text-black">
                                    <MdPrivacyTip />
                                </span>
                                <Link to="/"> Privacy Policy</Link>
                            </li>
                            <li
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleUserOptionClick('Settings')}
                            >
                                <span className="text-black">
                                    <AiFillSetting />
                                </span>
                                <Link to="/">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Login - SignUp - LogOut - Dashboard */}
            <div className='flex items-center gap-x-4'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-700 invisible'>
                            Log in
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-700 invisible'>
                            Sign up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}
                            className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700 invisible'>
                            Log Out
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button
                            className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700 invisible'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;
