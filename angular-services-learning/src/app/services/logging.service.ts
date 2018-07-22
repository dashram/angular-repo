export class LoggingService {
    
    logStatusChange(status: string){
        console.log('LoggerService: A server status changed, new status: ' + status);
    }
}