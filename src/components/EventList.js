import { useEffect, useState } from 'react';
import Event from './Event.js';
import DataService from '../services/DataService.js';

// Crea una instancia de DataService.
const ds = new DataService();

// Esta función acepta como propiedad un valor del input del filtro: filterValue.
function EventList({ filterValue }) {
    // State variable "evnts", que es para guardar la lista de todos los eventos.
    const [evnts, setEvents] = useState([]);
    // Y esta otra el listado de eventos pero los que coinciden con los filtrados.
    const [filteredEvents, setFilteredEvents] = useState([]);

    // UseEffect se ejecuta sólo una vez, después de que los componentes se hayan montado.
    useEffect(() => {
        // Llama al método getEventList (de DataService) que coje el listado de todos los eventos y lo guarda en data.
        ds.getEventList((data) => {
            // Y ese listado lo pasa utilizando setEvents a evnts.
            setEvents(data)
            // Y a filteredEvents.
            setFilteredEvents(data);
        });
    }, []);

    /* Este se ejecuta siempre que haya un cambio en evnts o en filterValue (esto es por el "array que hay al final", 
    en el otro useEffect está vacío)*/
    useEffect(() => {
        // Filtra los eventos dependiendo del valor que haya en el filtro.
        const filtered = evnts.filter((event) =>
            // Convierte el valor de "eventType" del json y el "filterValue" en LowerCase para que sea comparación "case-insensitive"
            event.eventType.toLowerCase().includes(filterValue.toLowerCase())
        );
        // El resultado de esa comparación se guarda aquí, en filtered.
        setFilteredEvents(filtered);
    }, [evnts, filterValue]);

    return (
        <>
            {
                // Recorre la array the eventos filtrados y hace un mapeo de cada item con su eventID, eventName, etc.
                filteredEvents.map((item) => {
                    return (
                        <Event eventID={item.eventID} eventName={item.eventName}
                            eventType={item.eventType} description={item.description}
                            img={item.img} location={item.location} locationHtml={item.locationHtml}
                            startingDate={item.startingDate} finishingDate={item.finishingDate}
                            startingTime={item.startingTime} finishingTime={item.finishingTime} />
                    );
                })
            }
        </>
    )
}

export default EventList;