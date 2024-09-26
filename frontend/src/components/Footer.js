import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-4 text-center flex-shrink-0">
            <p>&copy; {new Date().getFullYear()} AI Powered App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;