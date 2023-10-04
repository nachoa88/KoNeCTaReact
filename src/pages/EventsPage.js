import { useState } from 'react';
import Logo from '../components/Logo.js';
import Filter from "../components/Filter.js";
import EventList from "../components/EventList.js";

import '../components/css/Logo.css';
import '../components/css/Button.css';
import '../components/css/Filter.css';
import '../components/css/Event.css';

function EventsPage() {
    /* filterValue es la variable, y setFilterValue es la función que le asignará el valor a filterValue. En primera instancia
    se le está asignando el valor de un String vacío usando useState. Ver abajo por qué es const y no var o let */
    const [filterValue, setFilterValue] = useState('');

    // Function callback para manejar los cambios que suceden en el filtro, usa un parámetro "value".
    const handleFilterChange = (value) => {
        // Y por otro lado, ejecuta la función setFilterValue para asignar el nuevo valor al filtro.
        setFilterValue(value);
    };

    return (
        <div>
            <Logo />
            {/* Pasa la función callback handleFilterChange como propiedad al componente Filter */}
            <Filter onFilterChange={handleFilterChange} /> 
            <div className="container" id="eventsList">
                {/* Lo mismo pero pasa el valor del state (estado actual) de filterValue como 
                propiedad al componente EventList para mostrar sólo lo filtrado.*/}
                <EventList filterValue={filterValue} />
            </div>
        </div>
    )
}

export default EventsPage;

/* It's important to note that the use of const for declaring state variables is perfectly fine
 and recommended when you want to ensure that the variable reference doesn't change within a given scope. 
 In React, state variables declared with const are commonly used with the useState hook 
 to manage component state. The value of the state can change, but the variable holding the state remains constant.*/