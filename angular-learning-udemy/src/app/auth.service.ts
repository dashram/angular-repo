import { resolve, reject } from "q";

export class AuthService {
    loggedIn = false;

    //Fake method to take 2-sec to return authenticated status with a promise 
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( ()=> {
                    this.loggedIn =true;
                    resolve(this.loggedIn)
                }, 800)
            }
        );
        return promise;
    }

    login() {
        this.loggedIn;
    }

    logout() {
        this.loggedIn = false;
    }
}