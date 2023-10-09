import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HomePage from '../pages/HomePage.js';
import ProfilePage from '../pages/ProfilePage.js';
import EventsPage from '../pages/EventsPage.js';
import LoginPage from '../pages/LoginPage.js';
import RegisterPage from '../pages/RegisterPage.js';
import CreateEventPage from "../pages/CreateEventPage.js";
import UpdateEventPage from "../pages/UpdateEventPage.js";
import InformationPage from "../pages/InformationPage.js";
import FAQPage from "../pages/FAQPage.js";

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
                <Route path="createevent" element={<CreateEventPage />} />
                <Route path="updateevent" element={<UpdateEventPage />} />
                <Route path="information" element={<InformationPage />} />
                <Route path="faq" element={<FAQPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;