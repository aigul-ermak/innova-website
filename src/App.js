import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import JobMarket from "./components/JobMarket";
import Salaries from "./components/Salaries";
import UpcomingEvents from "./components/UpcomingEvents";
import UniversitiesInfo from "./components/UniversitiesInfo";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SelfAssessment from "./components/SelfAssesment";
import CareerQuiz from "./components/Quiz";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/Auth";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

    const handleLogin = () => {
        setIsLoggedIn(true);
        sessionStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('isLoggedIn');
    };

    return (
        <Router>
            <div className="flex flex-col min-h-screen">

                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>

                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/blogs" element={<Blogs/>}/>
                        <Route path="/job-market" element={<JobMarket/>}/>
                        <Route path="/salaries" element={<Salaries/>}/>
                        <Route path="/upcoming-events" element={<UpcomingEvents/>}/>
                        <Route path="/universities-info" element={<UniversitiesInfo/>}/>
                        <Route path="/selfassessment" element={<SelfAssessment/>}/>
                        <Route path="/quiz" element={<CareerQuiz/>}/>
                        <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
                        <Route path="/register" element={<Register/>}/>

                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard/>
                                </ProtectedRoute>
                            }
                        />

                    </Routes>
                </div>

                <Footer/>

            </div>

        </Router>
    );
};

const navigateTo = (path) => {
    window.location.href = `/${path}.html`;
};

export default App;
