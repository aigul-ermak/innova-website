import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import JobMarket from "./components/JobMarket";
import Salaries from "./components/Salaries";
import UpcomingEvents from "./components/UpcomingEvents";
import UniversitiesInfo from "./components/UniversitiesInfo";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div className="app">

                <div className="bg-blue-500 text-white p-4">
                    Hello, Tailwind CSS!
                </div>

                <Header />

                <Routes>
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/job-market" element={<JobMarket />} />
                    <Route path="/salaries" element={<Salaries />} />
                    <Route path="/upcoming-events" element={<UpcomingEvents />} />
                    <Route path="/universities-info" element={<UniversitiesInfo />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};

const navigateTo = (path) => {
    window.location.href = `/${path}.html`;
};

export default App;
