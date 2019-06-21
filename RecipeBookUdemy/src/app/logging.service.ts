import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    lastLog: String;

    printLog(message: string) {
        console.log("###Log :", message);
        console.log("###LastLog: ", this.lastLog);
        this.lastLog = message;
    }
}