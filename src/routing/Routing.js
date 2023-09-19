import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from '../pages/ProfilePage.js';
import HomePage from '../pages/HomePage.js';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;