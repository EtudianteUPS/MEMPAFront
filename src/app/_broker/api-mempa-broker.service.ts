/**
 * Configure l'accès à mon système
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Playlist} from '../_model/Playlist';
import {Observable} from 'rxjs';
import {Musique} from '../_model/Musique';
import {Utilisateur} from '../_model/Utilisateur';

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

  /**
   * Rècupère la liste de playlist à l'aide d'une requête HTTP GET
   * @return liste de playlists
   */
  public recupererListe(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>(this.url);
  }

  /**
   * Consulte une une playlist et incrémente le nombre de vues
   *  id
   */
  public getPlaylist(id: number): Observable<Playlist>{
    return this.httpClient.get<Playlist>(this.url + '/' + id);
  }

  /**
   * Ajoute une playlist
   *  play
   */
  public ajouterPlaylist(play: Playlist, user: Utilisateur): Observable<Playlist> {
    return this.httpClient.post<Playlist>(this.url + '/' + user.nomUtilisateur, play);
  }

  /**
   * Ajoute un morceau dans une playlist donnée
   * @ param id
   * @ param mus
   */
  public ajouterMorceau(id: number, mus: Musique): void{
    // console.log('broker ajouterMorceau'); console.log('id : ' + id); console.log(mus);
    this.httpClient.put<Playlist>(this.url + '/' + id, mus)
    .subscribe(
        (response) => { console.log(response); },
        (error) => { console.log('Erreur ajouterMorceau : ' + error); }
    ); /*gère la promesse*/
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
