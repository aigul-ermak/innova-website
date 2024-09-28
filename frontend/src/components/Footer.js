import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <NavLink to="/" className="hover:text-gray-900">
                    Home
                </NavLink>
                <NavLink to="/blogs" className="hover:text-gray-900">
                    Blogs
                </NavLink>
                <NavLink to="/job-market" className="hover:text-gray-900">
                    Job Market
                </NavLink>
                <NavLink to="/salaries" className="hover:text-gray-900">
                    Salaries
                </NavLink>
                <NavLink to="/upcoming-events"
                         className="hover:text-gray-900">
                    Upcoming Events
                </NavLink>
                <NavLink to="/universities-info"
                         className="hover:text-gray-900">
                    Universities Info
                </NavLink>
            </nav>


            <div className="flex justify-center space-x-5 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook"/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram"/>
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger"/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter"/>
                </a>
            </div>

            <p className="text-center text-gray-700 font-medium">&copy; {new Date().getFullYear()} AI Powered App. All
                rights reserved.</p>
        </footer>
    );
};

export default Footer;