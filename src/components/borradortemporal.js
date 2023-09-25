/*copia eventform*/

import { NavLink } from "react-router-dom";

export default function CreateEventPage() {
    return (
        <div className="row form mb-3">
                <form className="form-signin" method="post">
                    <h1 className="form-signin-heading">Create event</h1>
                    <div col-6>
                        <div className="form-group">
                            <label for="eventName" className="formlabel">Event name</label>
                            <input type="text" id="eventName" name="eventName" placeholder="Nombre del evento" size="30" required className="form-control" />
                            <label for="eventType">Event type</label>
                            <select id="eventType" name="eventType" required className="form-control">
                                <option value="Arte Urbano">Arte Urbano</option>
                                <option value="Cultural">Cultural</option>
                                <option value="Art">Art</option>
                                <option value="Danza">Danza</option>
                                <option value="Rock">Rock</option>
                                <option value="Comedia">Comedia</option>
                            </select>
                            <img src="img/UploadImage.jpg" alt="..." width="320" height="248" />
                            <label for="evenTdescription">Description</label>
                            <input type="textarea" id="eventDescription" name="eventDescription" placeholder="Describe brevemente el evento" size="30" rows="2" required className="form-control" />
                        </div>
                    </div>
                    <div col-6>
                        <div className="form-group">
                            <label for="date">Date</label>
                            <input type="date" id="date" name="date" required className="form-control"></input>
                            <label for="location">Location</label>
                            <input type="text" id="location" name="location" size="30" placeholder="Lugar del evento" required className="form-control"></input>
                            <img src="img/map.jpg" alt="..." width="370" />
                            <NavLink to="/events" className="btn btn-lg btn-primary btn-block" id="save" type="submit">Save</NavLink>
                        </div>
                    </div>
                </form>
        </div>
    )
}

import { NavLink } from "react-router-dom";

export default function CreateEventPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="form-signin">
                    <h1 className="form-signin-heading">Create event</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6"> {/* Aquí agregamos col-md-6 para crear la primera columna */}
                    <form method="post">
                        <div className="form-group">
                            {/* ... Contenido de la primera columna ... */}
                        </div>
                    </form>
                </div>
                <div className="col-md-6"> {/* Aquí agregamos col-md-6 para crear la segunda columna */}
                    <form method="post">
                        <div className="form-group">
                            {/* ... Contenido de la segunda columna ... */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

<div className="container">
<div className="row">
    <div className="form-signin">
        <h1 className="form-signin-heading">Create event</h1>
    </div>
</div>
<div className="row row-cols-2">
    <form method="post">
        <div className="col">
        <div className="form-group">
                <label for="eventName" className="formlabel">Event name</label>
                <input type="text" id="eventName" name="eventName" placeholder="Nombre del evento" size="30" required className="form-control" />
                <label for="eventType">Event type</label>
                <select id="eventType" name="eventType" required className="form-control">
                    <option value="Arte Urbano">Arte Urbano</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Art">Art</option>
                    <option value="Danza">Danza</option>
                    <option value="Rock">Rock</option>
                    <option value="Comedia">Comedia</option>
                </select>
                <img src="img/UploadImage.jpg" alt="..." width="320" height="248" />
                <label for="evenTdescription">Description</label>
                <input type="textarea" id="eventDescription" name="eventDescription" placeholder="Describe brevemente el evento" size="30" rows="2" required className="form-control" />
            </div>
        </div>
        <div className="col">
            <div className="form-group">
                <label for="date">Date</label>
                <input type="date" id="date" name="date" required className="form-control"></input>
                <label for="location">Location</label>
                <input type="text" id="location" name="location" size="30" placeholder="Lugar del evento" required className="form-control"></input>
                <img src="img/map.jpg" alt="..." width="370" />
                <NavLink to="/events" className="btn btn-lg btn-primary btn-block" id="save" type="submit">Save</NavLink>
            </div>
        </div>
    </form>
</div>
</div>
