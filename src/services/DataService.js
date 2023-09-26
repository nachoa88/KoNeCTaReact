class DataService {
    //url = "https://ew6ohmfse7.execute-api.us-east-1.amazonaws.com/KoNeCTa";
    url = "http://localhost:8080/api";
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
}

export default DataService;