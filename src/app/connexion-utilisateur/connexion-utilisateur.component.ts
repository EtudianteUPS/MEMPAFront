import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiUtilisateurBrokerService} from '../_broker/api-utilisateur-broker.service';
import {Utilisateur} from '../_model/Utilisateur';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-connexion-utilisateur',
  templateUrl: './connexion-utilisateur.component.html',
  styleUrls: ['./connexion-utilisateur.component.css']
})
export class ConnexionUtilisateurComponent implements OnInit {
  utilisateur: Utilisateur;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiUtilisateurBrokerService: ApiUtilisateurBrokerService,
    private appComponent: AppComponent
  ) {
  }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  public connexion(): void {
    this.apiUtilisateurBrokerService.connexion(this.utilisateur)
    .subscribe(
      response => this.utilisateur = response,
    );

    this.apiUtilisateurBrokerService.setCurrentUser(this.utilisateur);
    this.appComponent.setUser(this.apiUtilisateurBrokerService.currentUser);
    this.router.navigate(['/lister']);

    // // console.log('connexion user : '); console.log(this.apiUtilisateurBrokerService);
    // this.router.navigate(['/lister']);

    // .pipe(first())
    // .subscribe({
    //   next: () => {
    //     // get return url from query parameters or default to home page
    //     // const returnUrl = this.route.snapshot.queryParams['/'];
    //     // this.router.navigateByUrl(returnUrl);
    //     this.router.navigate(['/lister']);
    //   },
    //   error: error => {
    //     // this.alertService.error(error);
    //     // this.loading = false;
    //     console.log('[connexion utilisateur] Erreur : '); console.log(error);
    //   }
    // });
  }
}
