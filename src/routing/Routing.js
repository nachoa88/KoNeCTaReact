import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage.js';
import ProfilePage from '../pages/ProfilePage.js';
import EventsPage from '../pages/EventsPage.js';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="events" element={<EventsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;