/**
 * Configure l'accès à mon système
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Playlist} from '../_model/Playlist';
import {Observable} from 'rxjs';
import {Musique} from '../_model/Musique';
import {Utilisateur} from '../_model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ApiMempaBrokerService {
  private url = 'http://localhost:3000/api/playlists'; /*Url du serveur*/
  constructor(private httpClient: HttpClient) { }

  /* On ne maintient pas de liste de playlist au sein du service */

  /**
   * Rècupère la liste de playlist à l'aide d'une requête HTTP GET
   * @return liste de playlists
   */
  public recupererListe(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>(this.url);
  }

  /**
   * Récupère une playlist
   *  id
   */
  public getPlaylist(id: number): Observable<Playlist>{
    return this.httpClient.get<Playlist>(this.url + '/' + id);
  }

  /**
   * Ajoute une playlist
   *  play
   */
  // public ajouterPlaylist(play: Playlist): void {
  //   this.httpClient.post<Playlist>(this.url, play)
  //     .subscribe(
  //       (response) => { console.log(response); },
  //       (error) => { console.log('Erreur ajouter : ' + error); }
  //     ); /*gère la promesse*/
  // }
  public ajouterPlaylist(play: Playlist, user: Utilisateur): Observable<Playlist> {
    console.log('broker ajouterPlaylist'); console.log(play); console.log(user);
    return this.httpClient.post<Playlist>(this.url + '/' + user.nomUtilisateur, play);
  }


  public ajouterMorceau(id: number, mus: Musique): void{
    console.log('broker ajouterMorceau'); console.log('id : ' + id); console.log(mus);
    this.httpClient.put<Playlist>(this.url + '/' + id, mus)
    .subscribe(
        (response) => { console.log(response); },
        (error) => { console.log('Erreur ajouter : ' + error); }
    ); /*gère la promesse*/
  }
}
