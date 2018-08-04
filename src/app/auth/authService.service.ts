import { User } from "./user.model";
import { AuthData } from "./autData.model";
import { Subject } from "rxjs"
import { Router } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class authService {

    constructor(private router: Router) {}

    private user: User;
    stillAuth = new Subject<boolean>();

    registerUser(data: AuthData) {
        this.user = {
            email: data.email,
            userID: Math.round(Math.random()*10000).toString()
        }
        this.authSuccessfully();
    }

    loginUser(data: AuthData) {
        this.user = {
            email: data.email,
            userID: Math.round(Math.random()*10000).toString()
        }
        this.authSuccessfully();
    }

    logout() {
        this.user= null;
        this.stillAuth.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return this.user;
    }

    isAuth() {
        return this.user != null;
    }

    authSuccessfully() {
        this.stillAuth.next(true);
        this.router.navigate(['../training']);
    }
}