import { Component } from '@angular/core';
// import {ApiUtilisateurBrokerService} from './_broker/api-utilisateur-broker.service';
// import {Utilisateur} from './_model/Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'MEMPAFront';
  // user: Utilisateur;

  constructor(
    // private apiUtilisateurBrokerService: ApiUtilisateurBrokerService
  ) {
    // this.user = this.apiUtilisateurBrokerService.currentUser;
    // console.log('[app component constructor] user :'); console.log(this.user);
    // sthis.apiUtilisateurBrokerService.currentUser.subscribe(x => this.user = x);
  }

  // public setUser(user: Utilisateur): void{
  //   this.user = user;
  //   console.log('set user : '); console.log(this.user);
  // }

  // deconnexion(): void {
  //   this.user = null;
  //   this.apiUtilisateurBrokerService.logout();
  // }
}
