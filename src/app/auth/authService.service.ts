import { User } from "./user.model";
import { AuthData } from "./autData.model";
import { Subject } from "rxjs"

export class authService {

    private user: User;
    stillAuth = new Subject<boolean>();

    registerUser(data: AuthData) {
        this.user = {
            email: data.email,
            userID: Math.round(Math.random()*10000).toString()
        }
        this.stillAuth.next(true);
    }

    loginUser(data: AuthData) {
        this.user = {
            email: data.email,
            userID: Math.round(Math.random()*10000).toString()
        }
        this.stillAuth.next(true);
    }

    logout() {
        this.user= null;
        this.stillAuth.next(false);
    }

    getUser() {
        return this.user;
    }

    isAuth() {
        return this.user != null;
    }
}