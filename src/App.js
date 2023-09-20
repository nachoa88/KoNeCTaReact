import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Routing from './routing/Routing.js';
//import EventList from './components/EventList.js';

import './App.css';
import './components/css/Navbar.css';
import './components/css/Footer.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
