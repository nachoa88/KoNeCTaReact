import { useState } from "react";
import { useEffect } from "react";
import DataService from "../services/DataService.js"; // Se importa DataService
import { NavLink } from "react-router-dom";

export default function UpdateEventForm(props) {
    // Se crea instancia de DataService para poder usar la función addEvent.
    const dataService = new DataService();

    // Aquí se ponen los atributos del Event que deben ser completados y enviados como data cuando se este creando.
    const [data, setData] = useState({
        eventName: "",
        eventType: "",
        description: "",
        startingDate: "",
        finishingDate: "",
        startingTime: "",
        finishingTime: "",
        location: "",
        img: null,
    });

    // Initialize eventIdInput with the event ID passed via props
    const [eventIdInput, setEventIdInput] = useState(props.eventID);

    useEffect(() => {
        // Fetch event data by ID and populate the form fields
        fetchDataById(props.eventID);
    }, [props.eventID]);

    const fetchDataById = (eventID) => {
        // Fetch event data by ID using your DataService
        dataService.getEventById(eventID, (json) => {
            // Populate the form fields with fetched data
            setData({
                eventName: json.eventName,
                eventType: json.eventType,
                description: json.description,
                startingDate: json.startingDate,
                finishingDate: json.finishingDate,
                startingTime: json.startingTime,
                finishingTime: json.finishingTime,
                location: json.location,
                img: json.img,
            });
        });
    };

    const handleEventIdChange = (event) => {
        setEventIdInput(event.target.value);
    };

    const fetchEvent = () => {
        // Fetch event data by ID when the user clicks "Fetch Event"
        fetchDataById(eventIdInput);
    };


    // ESTO DE AQUI DEBAJO ESTA DESACTIVADO PORQUE NO HE LOGRADO QUE FUNCIONE EL GET BY ID, una vez solucionado, deberíamos seguir con esto.
    /*
    //Función para manejar el cambio en el imput y asignar el valor dependiendo del tipo de data (eventType, location, etc).
    //Es una arrow function que toma "event" como argumento, que sería el evento que el usuario está creando. 
    const handleInputChange = (event) => {
        // Esta línea extrae dos propiedades, "name" y "value", del "event.target" object.
        const { name, value } = event.target;
        // Función para actualizar el estado de la "data" del objeto.
        setData({
            // Los tres puntos son un "spread operator", lo que hace es hacer una copia del objeto data (la constante de arriba),
            // y luego va haciendo un update de la propiedad especificada en "name" con el valor "value" extraído del input field.
            ...data,
            [name]: value,
        });
    }

    //  ESTO ES LO QUE HABIA HECHO HASTA EL MOMENTO DE LA IMG
    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        setData({
            ...data,
            img: file, // Update the image property with the selected image file
        });
    };

    // Se llama a la función de dataService para hacer el efectivo el update el event.
    const updateEvent = () => {
        // Send a PUT request to update the event with modified data
        dataService.updateEvent(props.eventID, data, (json) => {
            console.log("Event updated:", json);
        });
    };

    */


    return (
        <div className="container">
            <div className="form-createevent">
                <h1 className="form-signin-heading">Update event</h1>
                <div className="row">
                    <form>
                        {/* Input field for eventID */}
                        <label htmlFor="eventID">Event ID:</label>
                        <input type="text" id="eventID" name="eventID" value={eventIdInput} onChange={handleEventIdChange}/>
                        <button type="button" onClick={fetchEvent}>Fetch Event</button>
                        
                        { 
                        /* COMO EL GET BY ID NO FUNCIONA, ESTO ESTA COMENTADO POR EL MOMENTO.
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="eventName" className="formlabel">Event name</label>
                                <input type="text" id="eventName" name="eventName" placeholder="Write the name of the Event"
                                    required className="form-control" value={data.eventName} onChange={handleInputChange} />
                                <label htmlFor="startingDate" className="formlabel">Starting Date</label>
                                <input type="date" id="startingDate" name="startingDate"
                                    required className="form-control" value={data.startingDate} onChange={handleInputChange} />
                                <label htmlFor="finishingDate" className="formlabel">Finishing Date</label>
                                <input type="date" id="finishingDate" name="finishingDate"
                                    required className="form-control" value={data.finishingDate} onChange={handleInputChange} />
                                <label htmlFor="startingTime" className="formlabel">Starting Hour</label>
                                <input type="time" id="startingTime" name="startingTime"
                                    required className="form-control" value={data.startingTime} onChange={handleInputChange} />
                                <label htmlFor="finishingTime" className="formlabel">Finishing Hour</label>
                                <input type="time" id="finishingTime" name="finishingTime"
                                    required className="form-control" value={data.finishingTime} onChange={handleInputChange} />
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="eventType" className="formlabel">Event type</label>
                                <select id="eventType" name="eventType"
                                    required className="form-control" value={data.eventType} onChange={handleInputChange}>
                                    <option value="Art">Art</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Cultural">Cultural</option>
                                    <option value="Dance">Dance</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Theater">Theater</option>
                                    <option value="Urban Art">Urban Art</option>
                                </select>
                                <label htmlFor="img" className="formlabel">Upload Image</label>
                                <input type="file" id="uploadImg" name="uploadImg" accept="image/*" className="form-control" onChange={handleImageInputChange} />
                                <label htmlFor="description" className="formlabel" >Description</label>
                                <input type="textarea" id="description" name="description" placeholder="Breif description of the event"
                                    required className="form-control" value={data.description} onChange={handleInputChange} />
                                <label htmlFor="location" className="formlabel">Location</label>
                                <input type="text" id="location" name="location" placeholder="Write the location of the event"
                                    required className="form-control" value={data.location} onChange={handleInputChange} />
                                <img src="img/map.jpg" alt="Location in the map" id="minimap" />
                                <div className="form-signin-footer">
                                    <NavLink to="/" className="btn btn-lg btn-primary btn-block" id="save" type="submit" onClick={updateEvent}>Update</NavLink>
                                </div>
                            </fieldset>
                        </div>
                        
                        */
                        }
                        
                    </form>
                </div>
            </div >
        </div >
    )
}