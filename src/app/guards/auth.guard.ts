import { inject } from "@angular/core";
import { UserService } from "../user/user.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from "@angular/router";



export const AuthGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const userService = inject(UserService);
    return userService.isLogged;

}