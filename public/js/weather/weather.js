// representation donnees meteo
import { GetFromSessionStorage } from "./storage.js";

export class Weather {
    
    constructor(){
        this.times = [];
        this.temperatures = [];
        this.weatherCodes = [];
    }

    getWeatherDatas(timelaps) {

        let dates = [];

        let hourOffset = new Date().getHours();

        dates = JSON.parse(GetFromSessionStorage("weather")).time;
        this.weatherCodes = JSON.parse(GetFromSessionStorage("weather")).weather_code;
        this.temperatures = JSON.parse(GetFromSessionStorage("weather")).temperature_2m;

        for (let index of dates) {
            this.times.push(index.split("T"));
        }
        
        this.temperatures = this.temperatures.slice(hourOffset, timelaps + hourOffset);
        this.weatherCodes = this.weatherCodes.slice(hourOffset, timelaps + hourOffset);
        this.times = this.times.slice(hourOffset, timelaps + hourOffset);
        
    }

}
