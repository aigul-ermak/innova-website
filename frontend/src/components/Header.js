import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            {/*<h1>AI Powered App</h1>*/}

            <nav className="nav-bar">
                <Link to="/" className="nav-btn">Home</Link>
                <Link to="/self-assessment" className="nav-btn">Self Assessment</Link>
                <Link to="/career-quiz" className="nav-btn">Career Quiz</Link>
                <button className="nav-btn">Chat with AI</button>
                <Link to="/dashboard" className="nav-btn">Dashboard</Link>
            </nav>
        </header>
    );
};

export default Header;
