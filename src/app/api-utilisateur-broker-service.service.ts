import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurBrokerServiceService {
  private url = 'http://localhost:3000/api/utilisateurs'; /*Url du serveur*/
  constructor(private httpClient: HttpClient) { }

  public recupererListeUtilisateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.url);
  }

  public getUtilisateur(id: number): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this.url + '/' + id);
  }

  public ajouterUtilisateur(user: Utilisateur): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(this.url, user);
  }
}
