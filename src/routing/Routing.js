import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HomePage from '../pages/HomePage.js';
import ProfilePage from '../pages/ProfilePage.js';
import EventsPage from '../pages/EventsPage.js';
import LoginPage from '../pages/LoginPage.js';
import RegisterPage from '../pages/RegisterPage.js';

import '../components/css/Navbar.css';
import '../components/css/Footer.css';

function Routing() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;