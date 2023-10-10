/* La función filter acepta dos propiedades "filterValue" y "onFilterChange" como parámetros:
    - filterValue: es el valor actual del input del filtro.
    - onFilterChange: es una función de tipo callback que devuelve el valor actualizado del input. */
function Filter({ filterValue, onFilterChange }) {

    /* Esta función de tipo callback se ejecuta cuando el usuario escribe algo en el input del filtro, 
    toma ese "evento" como parámetro, OJO no evento de rock, sino evento de que alguien escribió algo.*/
    const handleFilterChange = (event) => {
        // Guarda el valor de lo que se escribió en el input del filtro en una variable llamada "value".
        const value = event.target.value;
        // Llama a la función onFilterChange y le pasa el nuevo valor del input.
        onFilterChange(value);
    };

    return (
        <div className="container" id="events">
            <h1>Events</h1>

            <div className="row" id="filter">
                <div className="col-md-1"></div>
                <div className="col-md-3 col-xs-12 text-md-end text-center">
                    <h3>Filter Events:</h3>
                </div>
                <div className="col-md-8 col-xs-12 text-md-start text-center">
                    {/*Aquí en el input es que se ejecuta el handleFilterChange cuando hay algún cambio (onChange)*/}
                    <input type="text" id="eventFilter" placeholder="Filter the events list by writing the type of event"
                        value={filterValue} onChange={handleFilterChange} />
                </div>
                <div className="col-md-1"></div>
            </div>

            <div id="cardsEvents"></div>
        </div>
    )
};

export default Filter;