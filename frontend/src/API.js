const weather_url = "http://api.openweathermap.org/data/2.5/weather?q=";
const weather_url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
const api_url = "http://localhost:38002";

export function downloadRaport(city, key) {
    return fetch(`${weather_url}${city}&units=metric&APPID=${key}`).then(res => res.json());
}

export function downloadRaportFuture(city, key) {
    return fetch(`${weather_url_forecast}${city}&units=metric&APPID=${key}`).then(res => res.json());
}

export function login(user) {
    return fetch(`${api_url}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(async res => {
        let clone = res.clone();
        const check = await res.text()

        if (check !== "wrong") {

            return clone.json()
        }
        else {
            return "wrong"
        }
    })
}

export function register(product) {
    return fetch(`${api_url}/register`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json());
}