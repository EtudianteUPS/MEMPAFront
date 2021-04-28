import { Component, OnInit } from '@angular/core';
import {Playlist} from '../_model/Playlist';
// import {Utilisateur} from '../Utilisateur';
// import {Musique} from '../Musique';
import {ApiMempaBrokerService} from '../_broker/api-mempa-broker.service';
import {Utilisateur} from '../_model/Utilisateur';
import {ApiUtilisateurBrokerService} from '../_broker/api-utilisateur-broker.service';

@Component({
  selector: 'app-lister-playlist',
  templateUrl: './lister-playlist.component.html',
  styleUrls: ['./lister-playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  lPlaylists: Playlist[] = [];
  id: number;
  user: Utilisateur;
  key:string = 'id';
  reverse:boolean = false;

  /**
   * Constructeur qui récupère le service permettant de l'utiliser plus tard
   */
  constructor(private apiMempaBrokerService: ApiMempaBrokerService,
              private apiUtilisateurBrokerService: ApiUtilisateurBrokerService) {
    this.user = this.apiUtilisateurBrokerService.currentUser;
  }


  ngOnInit(): void {
    this.apiMempaBrokerService.recupererListe().subscribe((data) => { this.lPlaylists = data; });
  }


  sort(key): void{
    this.key = key;
    this.reverse = !this.reverse;
  }

  deleteRow(val: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette playlist ?')) {
      this.apiMempaBrokerService.supprimerPlaylist(val).subscribe(
        (response) => {
          console.log(response);
        }
        , (error) => {
          console.log('Erreur ajouter');
        }
      );
      this.apiMempaBrokerService.recupererListe().subscribe((response) => {
        this.lPlaylists = response;
      });

      document.location.reload();
    }
  }
}
