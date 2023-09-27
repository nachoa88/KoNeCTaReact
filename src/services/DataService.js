class DataService {
    // URL BACKEND
    url = "http://localhost:8080/api";
    // URL FAKE BACKEND
    // url = "https://ew6ohmfse7.execute-api.us-east-1.amazonaws.com/KoNeCTa";
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

    /*
    FETCH PARA EL POST ???
    fetch('http://localhost:8080/api/events',
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(res=>res.json())
        .then(bool => {
            console.log(bool)
        })
    */

}

export default DataService;