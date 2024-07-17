// gestion evenement user
import { AddToSessionStorage } from "./storage.js";

export function GetCurrentTimeByConnection(){
    let currentTime = new Date();
    AddToSessionStorage("connectionTime", currentTime.toJSON());
}

export function retryTask(callback, successCondition){
    //a finir
    let retries = 0;
    retry();
    function retry(){
        if(retries > 5){
            throw new Error("Connection timeout retry later.");
        }else{
            if(callback == successCondition){
                return;
            }else{
            callback();
            console.log(callback);
            setTimeout(retry, 1000);
            }
        }
        retries++;
    }
}