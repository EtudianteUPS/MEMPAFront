/**
 * Configure l'accès à mon système
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../_model/Utilisateur';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurBrokerService {
  private url = 'http://localhost:3000/api/utilisateurs'; /*Url du serveur*/
  /* On garde l'utilisateur pour le garder connecté */
  public currentUser: Utilisateur;

  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.currentUser = null;
  }

  public setCurrentUser(user: Utilisateur): void{
    this.currentUser = user;
    console.log('[api broker] set user : '); console.log(this.currentUser);
  }

  // public get currentUserValue(): Utilisateur {
  //   return this.currentUser;
  // }

  public connexion(user: Utilisateur): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this.url + '/' + user.nomUtilisateur + '/' + user.motDePasse);
  }


  public inscrire(user: Utilisateur): void {
    this.httpClient.post<Utilisateur>(this.url, user)
    .subscribe(
      (response) => { console.log('reponse : '); console.log(response); },
      (error) => { console.log('[inscrire utilisateur] Erreur : '); console.log(error); }
    );
  }

  public logout(): void {
    // remove user from local storage and set current user to null
    this.currentUser = null;
    this.router.navigate(['/connexion']);
  }

  public recupererListeUtilisateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.url);
  }
}
