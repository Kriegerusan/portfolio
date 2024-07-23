// manipulation DOM
import { Weather } from "./weather.js";

export class UI {


  createHourlyCards(quantity) {
    //recuperation des donnees meteo
    let weatherDatas = new Weather();
    weatherDatas.getWeatherDatas(quantity);
    let weatherHourContainer = document.createElement("div");
    weatherHourContainer.setAttribute("class", "weather-container");
    document.getElementsByClassName('content-wrapper')[0].appendChild(weatherHourContainer);
    for (let i = 0; i < weatherDatas.times.length; i++) {

      this.createHourlyCard(weatherHourContainer, weatherDatas.times[i], weatherDatas.temperatures[i], weatherDatas.weatherCodes[i]);
    }
  }


  createHourlyCard(parent, time, temp, weather_code) {

    let weatherHourCard = document.createElement("div");
    parent.appendChild(weatherHourCard);
    weatherHourCard.setAttribute("class", "weather-card");

    let weatherDataCard = document.createElement("div");
    weatherDataCard.setAttribute("class", "weather-data-card");

    let dateParag = document.createElement("p");
    dateParag.setAttribute("class", "date");
    let hourParag = document.createElement("p");
    let tempParag = document.createElement("p");
    let codeParag = document.createElement("p");

    weatherHourCard.appendChild(dateParag);
    weatherDataCard.appendChild(hourParag);
    weatherDataCard.appendChild(codeParag);
    weatherDataCard.appendChild(tempParag);
    weatherHourCard.appendChild(weatherDataCard);

    if (time[1] == "00:00") {
      dateParag.textContent = time[0];
    }
    hourParag.textContent = time[1];
    tempParag.textContent = temp + "°C";

    let hour = time[1].split(":");
    codeParag.innerHTML = this.getweatherCode(weather_code, hour[0]);
  }


  createWidgetNav() {
    let form = document.createElement("div");
    document.body.appendChild(form);
    form.setAttribute("class", "weather-widget-parameters");

    let positionDiv = document.createElement("div");
    let positionLabel = document.createElement("label");
    let positionInput = document.createElement("input");
    positionLabel.textContent = "position";
    form.appendChild(positionDiv);
    positionDiv.appendChild(positionLabel);
    positionDiv.appendChild(positionInput);

    let timeSettingDiv = document.createElement("div");
    let timeSetting = document.createElement("select");

    form.appendChild(timeSettingDiv);
    timeSettingDiv.appendChild(timeSetting);

    let applyChangesButton = document.createElement("button");
    applyChangesButton.textContent = "Appliquer";
    form.appendChild(applyChangesButton);
  }


  getweatherCode(code, hour){
    let icon = "";
    switch(code){
        case 0 :
          if(hour >= 6 && hour <= 18){
            icon = '<i class="fa-solid fa-sun"></i>';
          }else{
            icon = '<i class="fa-solid fa-moon"></i>';
          }
            
            break;
        case 1:
        case 2:
          if(hour >= 6 && hour <= 18){
            icon = '<i class="fa-solid fa-cloud-sun"></i>';
          }else{
            icon = '<i class="fa-solid fa-cloud-moon"></i>';
          }
          break;
        case 3:
            icon = '<i class="fa-solid fa-cloud"></i>';
            break;
        case 45:
        case 48:
            icon = '<i class="fa-solid fa-smog"></i>';
            break;
        case 51: 
        case 53: 
        case 55:
          if(hour >= 6 && hour <= 18){
            icon = '<i class="fa-solid fa-cloud-sun-rain"></i>';
          }else{
            icon = '<i class="fa-solid fa-cloud-moon-rain"></i>';
          }
          break;
        case 61:
        case 63:
        case 65:
            icon = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
            break;
        case 66:
        case 67:
            icon = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
            break;
        case 71:
        case 73:
        case 75:
            icon = '<i class="fa-regular fa-snowflake"></i>'
            break;
        case 77:
            icon = '<i class="fa-solid fa-snowflake"></i>'
            break;
        case 80:
        case 81:
        case 82:
            icon = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
            break;
        case 85:
        case 86:
            icon = '<i class="fa-solid fa-snowflake"></i>'
            break;
        case 95:
            icon = '<i class="fa-solid fa-cloud-bolt"></i>'
            break;
        case 96: 
        case 99:
            icon = '<i class="fa-solid fa-bolt-lightning"></i>'
            break;
    }
    return icon;
  }
}
