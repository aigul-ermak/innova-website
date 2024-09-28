import React from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

        sessionStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Are you sure you want to logout?</h2>
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
