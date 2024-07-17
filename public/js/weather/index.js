// point d'entree
import { getHourlyWeather } from "./api.js";
import { UI } from "./ui.js";
import { getCurrentGeoPosition } from "./api.js";
import { retryTask } from "./eventHandler.js";
// import { GetCurrentTimeByConnection } from "./eventHandler.js";
let weatherUI = new UI();


//weatherUI.createWidgetNav();

getCurrentGeoPosition();



if(sessionStorage.getItem("clientCoords") !== null){
    
    getHourlyWeather().then(()=>{
        weatherUI.createHourlyCards(96);
    });
}


// if(sessionStorage.getItem("weather") === null){
//     
//     
//     //setTimeout(() => {weatherUI.createHourlyCards(96)}, 500);
//     console.log("data is updated.");
// }else{
//     console.log("data is already up to date.");
//     weatherUI.createHourlyCards(96);
// }

