// appel des API
import { AddToSessionStorage, GetFromSessionStorage } from "./storage.js";

export async function getCurrentGeoPosition(){

    
    navigator.geolocation.getCurrentPosition(setCoords, ()=> {return;});

    function setCoords(position){

        let clientCoords  = {
            'latitude' : position.coords.latitude.toFixed(4),
            'longitude' : position.coords.longitude.toFixed(4),
        }
        AddToSessionStorage("clientCoords", JSON.stringify(clientCoords));
        console.log(clientCoords);
    }

    return await null;

}




export async function getHourlyWeather(){

    const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude='+ JSON.parse(GetFromSessionStorage("clientCoords")).latitude +'&longitude='+ JSON.parse(GetFromSessionStorage("clientCoords")).longitude +'&hourly=temperature_2m,weather_code&timezone=Europe%2FBerlin&models=meteofrance_seamless';
    console.log(API_URL);
    let weatherAPI = await fetch(API_URL);
    let weatherJSON = await weatherAPI.json();
    let weatherHourlyData = weatherJSON.hourly;

    AddToSessionStorage("weather", JSON.stringify(weatherHourlyData));

}
