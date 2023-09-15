import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Logo from './Logo.js';
import Home from './Home.js';
import Map from './Map.js';
import './App.css';
import './Navbar.css';
import './Footer.css';
import './Logo.css';
import './Home.css';
import './Map.css';

import ProfilePage from './profile/ProfilePage.js';

function App() {
  /*
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Home />
      <Map />
      <Footer />
  
    </div>
  );
  */
  
  return <ProfilePage />;
  
}

export default App;
