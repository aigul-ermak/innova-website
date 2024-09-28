import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';


const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };


    return (
        <header className="bg-white shadow-md z-50 relative">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">AI Powered</NavLink>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
                        Home
                    </NavLink>
                    <NavLink to="/blogs"
                             className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Blogs</NavLink>
                    <NavLink to="/job-market"
                             className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Job
                        Market</NavLink>
                    <NavLink to="/salaries"
                             className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Salaries</NavLink>
                    <NavLink to="/upcoming-events"
                             className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Upcoming
                        Events</NavLink>
                    <NavLink to="/universities-info"
                             className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Universities
                        Info</NavLink>
                </div>


                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">

                    <Link
                        to="/login"
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
                    >
                        Log in <span aria-hidden="true"></span>
                    </Link>
                    <Link
                        to="/register"
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
                    >
                        Register <span aria-hidden="true"></span>
                    </Link>
                </div>


                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-900 focus:outline-none"
                    >

                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>


                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 lg:hidden">
                        <NavLink to="/"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/blogs"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Blogs</NavLink>
                        <NavLink to="/job-market"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Job Market</NavLink>
                        <NavLink to="/salaries"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Salaries</NavLink>
                        <NavLink to="/upcoming-events"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Upcoming Events</NavLink>
                        <NavLink to="/universities-info"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Universities Info</NavLink>

                        <NavLink to="/login"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Log in</NavLink>
                        <NavLink to="/register"
                                 className="block text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 mb-4"
                                 onClick={() => setMobileMenuOpen(false)}>Register</NavLink>
                    </div>
                )}

            </nav>
        </header>
    );
};

export default Header;

