import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanActivate 
{
    constructor(private router: Router, private jwtService: JwtHelperService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
        try
        {
            // 1. Valida si el token almacenado en localStorage, ya expiro
            if (this.jwtService.isTokenExpired()) 
            {
                this.router.navigate(['/login']);
                return false;
            // 2. Si el token es valido, devuelve true para permitir el enrutamiento
            } else {
                return true;
            }
        }catch(error) // En caso de error retorna al login
        {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
