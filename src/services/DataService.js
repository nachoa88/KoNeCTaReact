class DataService {
    // URL DB TOMCAT NACHO
    url = "http://52.45.160.79:8080/api-events-v1/api";
    

    // URL BACKEND DESDE VSC --> url = "http://localhost:8080/api";
    // URL FAKE BACKEND --> url = "https://ew6ohmfse7.execute-api.us-east-1.amazonaws.com/KoNeCTa";
    getData(path, callback) {
        fetch(this.url + path)
            .then(res => res.json())
            .then(json => {
                callback(json)
            })
    }

    //Esto sería en caso de tener en la DDBB la parte de events y de usuarios. Se pueden agregar lo que querramos con este formato.
    getEventList(callback) {
        this.getData("/events", callback)
    }
    getUsers(callback) {
        this.getData("/users", callback)
    }

    // FETCH PARA EL POST, basicamente es lo que nos pasó Marco, sólo que con el catch que no es necesario.
    addEvent(data, callback) {
        fetch(this.url + "/events", {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: { "Content-Type": "application/json", },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then((res) => res.json())
            .then(callback)
            .catch((error) => {
                console.error("Error adding event:", error);
            });
    }
}


export default DataService;