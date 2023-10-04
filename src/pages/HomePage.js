import Logo from '../components/Logo.js';
import Carrousel from '../components/Carrousel.js';
import Map from '../components/Map.js';

import '../components/css/Logo.css';
import '../components/css/HomeCards.css';
import '../components/css/Map.css';
import '../components/css/Button.css';

function HomePage() {
    return(
        <div>
            <Logo />
            <Carrousel />
            <Map />
        </div>
    )
}

export default HomePage;