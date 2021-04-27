import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ApiUtilisateurBrokerService } from '../_broker/api-utilisateur-broker.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private apiUtilisateurBrokerService: ApiUtilisateurBrokerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.apiUtilisateurBrokerService.currentUser;
    console.log('[auth guard] current user : '); console.log(user);
    if (user) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/inscription']);
    return false;
  }
}
