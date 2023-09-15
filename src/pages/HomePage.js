import Logo from '../components/Logo.js';
import Home from '../components/Home.js';
import Map from '../components/Map.js';

import '../components/css/Logo.css';
import '../components/css/Home.css';
import '../components/css/Map.css';

function HomePage() {
    return(
        <div>
            <Logo />
            <Home />
            <Map />
        </div>
    )
}

export default HomePage;