/**
 * Configure l'accès à mon système
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utilisateur} from '../_model/Utilisateur';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurBrokerService {
  private url = 'http://localhost:3000/api/utilisateurs'; /*Url du serveur*/
  private userSubject: BehaviorSubject<Utilisateur>;
  /* On garde l'utilisateur pour le garder connecté */
  public user: Observable<Utilisateur>;

  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.userSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): Utilisateur {
    console.log('user value : '); console.log(this.userSubject.value);
    return this.userSubject.value;
  }


  public connexion(username, password): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(this.url, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  public inscrire(user: Utilisateur): void {
    console.log('broker user : '); console.log(user);
    this.httpClient.post<Utilisateur>(this.url, user)
      .subscribe(
        (response) => { console.log('reponse : '); console.log(response); },
        (error) => { console.log('[ajouter utilisateur] Erreur : '); console.log(error); }
      );
  }

  public logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/connexion']);
  }

  public recupererListeUtilisateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.url);
  }

  public getUtilisateur(id: number): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this.url + '/' + id);
  }
}
