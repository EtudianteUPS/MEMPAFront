/**
 * Configure l'accès à mon système
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Playlist} from './Playlist';
import {Observable} from 'rxjs';
// import {playlistFetch} from './playlistFetch';
// import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiMempaBrokerService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
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

  public supprimerPlaylist(id: number): Observable<Playlist> {
    // const ur = '${this.ur}/${id}';
    return this.httpClient.delete<Playlist>(this.url + '/deleteRow/' + id, this.httpOptions);
  }

  // public getUpdatePlaylist(id: number): Observable<Playlist> {
  //   const ur = '${this.ur}/${id}';
  //   return this.httpClient.get<Playlist>(ur, this.httpOptions);
  // }
  //
  // public UpdatePlaylist(playlist: playlistFetch): Observable<Playlist> {
  //   const ur = '${this.ur}/${playlist.id}';
  //   return this.httpClient.put<Playlist>(ur, this.httpOptions).pipe(
  //     map(() => playlist)
  //   );
  // }
}
