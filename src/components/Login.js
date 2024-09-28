import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; // For redirection

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // For storing error message

    const navigate = useNavigate();  // For navigation to dashboard

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve user info from sessionStorage
        const storedUser = JSON.parse(sessionStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            // Set the login flag in sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            // Redirect to dashboard
            navigate('/dashboard');
        } else {
            // Show error if username or password doesn't match
            setError('Invalid username or password. Please try again.');
        }
    };

    return (
        <div
            className="max-w-lg mx-auto bg-white dark:bg-white rounded-lg shadow-md px-8 py-10 mt-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-black-700 dark:text-black-200 mb-8">
                Login to AI Powered
            </h1>

            {error && (
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="username" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="password" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
                >
                    Login
                </button>
            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">Don't have an account? </span>
                <a href="/register" className="text-blue-500 hover:text-blue-600">
                    Register
                </a>
            </div>
        </div>
    );
};

export default Login;
