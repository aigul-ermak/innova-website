import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Link to='/selfassessment' exact>
                <button className='btn btn-primary'>
                    <span>Self Assessment</span>
                </button>
            </Link>

            <Link to='/quiz' exact>
                <button className='btn btn-primary'>
                    <span>Career Quiz</span>
                </button>
            </Link>
        </div>
    );
};

export default Dashboard;