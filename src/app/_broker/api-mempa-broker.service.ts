/**
 * Configure l'accès à mon système
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Playlist} from '../_model/Playlist';
import {Observable} from 'rxjs';
import {Musique} from '../_model/Musique';

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
  public ajouterPlaylist(play: Playlist): Observable<Playlist> {
    return this.httpClient.post<Playlist>(this.url, play);
  }


  public ajouterMorceau(id: number, mus: Musique): void{
    this.httpClient.put<Playlist>(this.url + '/' + id, mus)
    .subscribe(
        (response) => { console.log(response); },
        (error) => { console.log('Erreur ajouter : ' + error); }
    ); /*gère la promesse*/
  }
}
