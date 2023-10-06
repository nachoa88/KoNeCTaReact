import { useState } from "react";
import DataService from "../services/DataService.js"; // Se importa DataService
import { NavLink } from "react-router-dom";

export default function CreateEventPage() {
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

    /* Función para manejar el cambio en el imput y asignar el valor dependiendo del tipo de data (eventType, location, etc).
    Es una arrow function que toma "event" como argumento, que sería el evento que el usuario está creando. */
    const handleInputChange = (event) => {
        // Esta línea extrae dos propiedades, "name" y "value", del "event.target" object.
        const { name, value } = event.target;
        // Función para actualizar el estado de la "data" del objeto.
        setData({
            /* Los tres puntos son un "spread operator", lo que hace es hacer una copia del objeto data (la constante de arriba),
            y luego va haciendo un update de la propiedad especificada en "name" con el valor "value" extraído del input field. */
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

    // Se llama a la función de dataService para agregar el event.
    const addEvent = () => {
        dataService.addEvent(data, (json) => {
            // Como respuesta sale el ID del evento creado
            console.log(json);
        });
    }

    return (
        <div className="container">
            <div className="form-createevent">
                <h1 className="form-signin-heading">Create event</h1>
                <div className="row">
                    <form>
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
                                    <NavLink to="/" className="btn btn-lg btn-primary btn-block" id="save" type="submit" onClick={addEvent}>Save</NavLink>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}