import { useEffect, useState } from 'react';
import Event from './Event.js';
import DataService from '../services/DataService.js';

const ds = new DataService();

function EventList() {
    
    const [evnts, setEvents] = useState([]);

    useEffect(() =>{
        ds.getEventList(setEvents);
    }, []);

    return (
        <>
            {
                evnts.map((item) => {
                    return <Event eventID={item.eventID} eventName={item.eventName}
                        eventType={item.eventType} description={item.description}
                        img={item.img} location={item.location} locationHtml={item.locationHtml}
                        startingDate={item.startingDate} finishingDate={item.finishingDate}
                        startingTime={item.startingTime} finishingTime={item.finishingTime} />
                })
            }
        </>
    )
}

export default EventList;