import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="text-center py-12 px-4">
            <h2 className="text-2xl font-bold">Get In Touch</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
                <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                    <Link to='/selfassessment'>
                        <button
                            className='text-xl font-bold'>
                            <span>Self Assessment</span>
                        </button>
                    </Link>
                </div>

                <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                    <Link to='/quiz'>
                        <button
                            className='text-xl font-bold'>
                            <span>Career Quiz</span>
                        </button>
                    </Link>
                </div>

                <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                    <Link to='#'>
                        <button
                            className='text-xl font-bold'>
                            <span>Chat with AI</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;