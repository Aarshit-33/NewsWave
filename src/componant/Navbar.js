import React from "react";
import logo from "../logo.svg";
import profilephoto from "../images/profile-picture.jpg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
    const themeToggle = () => {
        document.documentElement.classList.toggle("dark");
    };
    return (
        <nav className="fixed w-screen bg-slate-200 bg-opacity-90 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 dark:bg-opacity-90 z-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        {props.title}
                    </span>
                </Link>
                <div className="flex items-center md:order-2">
                    {/* <button
                        type="button"
                        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-8 h-8 rounded-full"
                            src={profilephoto}
                            alt="user"
                        />
                    </button> */}
                    {/* theme toggle button */}
                    <button type="button" className="p-3" onClick={themeToggle}>
                        <svg
                            id="sun"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 hidden dark:block"
                        >
                            <path
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                className="fill-sky-400/20 stroke-sky-500"
                            ></path>
                            <path
                                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                className="stroke-sky-500"
                            ></path>
                        </svg>
                        <svg
                            id="moon"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-6 h-6 dark:hidden"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                className="fill-sky-400/20"
                            ></path>
                            <path
                                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                className="fill-sky-500"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                className="fill-sky-500"
                            ></path>
                        </svg>
                    </button>
                    {/* <!-- Dropdown menu -->
                    <div
                        className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdown"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="top"
                        style={{
                            position: "absolute",
                            inset: "auto auto 0px 0px",
                            margin: "0px",
                            transform: "translate(1044.44px, 1073.33px",
                        }}
                    >
                        <div className="py-3 px-4">
                            <span className="block text-sm text-gray-900 dark:text-white">
                                Bonnie Green
                            </span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                name@flowbite.com
                            </span>
                        </div>
                        <ul className="py-1" aria-labelledby="dropdown">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Earnings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className="">
                            <NavLink
                                exact="true"
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "default-link"
                                }
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                exact="true"
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "default-link"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                exact="true"
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "default-link"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
