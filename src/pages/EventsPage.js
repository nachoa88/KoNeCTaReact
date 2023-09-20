import Logo from '../components/Logo.js';
import Filter from "../components/Filter.js";
import EventList from "../components/EventList.js";

import '../components/css/Logo.css';
import '../components/css/Button.css';
import '../components/css/Filter.css';
import '../components/css/Cards.css';

function EventsPage() {
    return(
        <div>
            <Logo />
            <Filter />
            <EventList />
        </div>
    )
}

export default EventsPage;