import { NavLink } from "react-router-dom";

function SendForm(){
    
    let data = {
        "eventName": "ejemplo"
        }

    fetch('http://localhost:8080/api/events', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })
    .then (res => res.json())
    .then (int => { //newEvent() retorna un int
        console.log(int)
    })
}

export default function CreateEventPage() {
    return (
        <div className="container">
            <div className="form-createevent">
                <h1 className="form-signin-heading">Create event</h1>
                <div className="row">
                    <form method="post">
                        <div className="form-group">
                            <fieldset>
                                <label for="eventName" className="formlabel">Event name</label>
                                <input type="text" id="eventName" name="eventName" placeholder="Nombre del evento" size="30" required className="form-control" />
                                <label for="eventType" className="formlabel">Event type</label>
                                <select id="eventType" name="eventType" required className="form-control">
                                    <option value="Arte Urbano">Arte Urbano</option>
                                    <option value="Cultural">Cultural</option>
                                    <option value="Art">Art</option>
                                    <option value="Danza">Danza</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Comedia">Comedia</option>
                                </select>
                                <img src="img/UploadImage.jpg" alt="..." id="upload" />
                                <label for="evenTdescription" className="formlabel">Description</label>
                                <input type="textarea" id="eventDescription" name="eventDescription" size="30" placeholder="Describe brevemente el evento" required className="form-control" />
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label for="date" className="formlabel">Date</label>
                                <input type="date" id="date" name="date" required className="form-control"></input>
                                <label for="hour" className="formlabel">Hour</label>
                                <input type="time" id="hour" name="hour" required className="form-control"></input>
                                <label for="location" className="formlabel">Location</label>
                                <input type="text" id="location" name="location" size="30" placeholder="Lugar del evento" required className="form-control"></input>
                                <img src="img/map.jpg" alt="..." id="minimap" />
                                <div className="form-signin-footer"><button className="btn btn-lg btn-primary btn-block" id="save" type="submit" onClick={SendForm}>  Save  </button></div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}