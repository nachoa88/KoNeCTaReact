import Logo from '../components/Logo.js';
import HomeCards from '../components/HomeCards.js';
import Map from '../components/Map.js';

import '../components/css/Logo.css';
import '../components/css/HomeCards.css';
import '../components/css/Map.css';
import '../components/css/Button.css';
import { NavLink } from 'react-router-dom';

function HomePage() {
    return(
        <div>
            <Logo />
            <HomeCards />
            <Map />
        </div>
    )
}

export default HomePage;