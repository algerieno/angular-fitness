import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { authService } from "./authService.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auService: authService, private router: Router) {}

    canActivate(activatedRoute: ActivatedRouteSnapshot,routerState: RouterStateSnapshot) {
        if(this.auService.isAuth()){
            return true;
        }else {
            this.router.navigate(['/login']);
        }
        
    }
}