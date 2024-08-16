import React from 'react';
import { Link } from 'react-scroll';
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"
const Navbar = ({ toggleTheme, theme }) => {
    return (
        <nav className="bg-gray-800 dark:bg-gray-50 dark:shadow-customNav p-2 md:p-6 fixed w-full z-10 top-0">
            <div className='block md:flex justify-center items-center'>
                <div className="container mx-auto hidden md:flex flex-col md:flex-row justify-center items-center">
                    <div className="space-y-2 sm:space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center">
                        <Link
                            to="overview"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="text-gray-300 dark:text-gray-900 hover:text-primary cursor-pointer dark:hover:text-primary"
                        >
                            Overview
                        </Link>
                        <Link
                            to="authentication"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="text-gray-300 dark:text-gray-900 hover:text-primary cursor-pointer dark:hover:text-primary"
                        >
                            Authentication
                        </Link>
                        <Link
                            to="endpoints"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="text-gray-300 dark:text-gray-900 hover:text-primary cursor-pointer dark:hover:text-primary"
                        >
                            Endpoints
                        </Link>
                        <Link
                            to="tutorial"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="text-gray-300 dark:text-gray-900 hover:text-primary cursor-pointer dark:hover:text-primary"
                        >
                            Tutorial
                        </Link>
                        <Link
                            to="code-example"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="text-gray-300 dark:text-gray-900 hover:text-primary cursor-pointer dark:hover:text-primary"
                        >
                            Code Examples
                        </Link>
                        <Link
                            to="api-pricing"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="text-gray-300 dark:text-gray-900 hover:text-primary cursor-pointer dark:hover:text-primary"
                        >
                            API Pricing
                        </Link>
                    </div>
                </div>
                <button
                    onClick={toggleTheme}
                    className="md:mt-0 px-2 md:px-4 py-2 text-gray-300 dark:text-gray-900 float-right"
                >
                    {theme === 'dark' ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
