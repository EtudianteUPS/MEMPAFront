import { Component, OnInit } from '@angular/core';
import {Playlist} from '../_model/Playlist';
import {ApiMempaBrokerService} from '../_broker/api-mempa-broker.service';
// import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiUtilisateurBrokerService} from '../_broker/api-utilisateur-broker.service';
import {Utilisateur} from '../_model/Utilisateur';

@Component({
  selector: 'app-creer-playlist',
  templateUrl: './creer-playlist.component.html',
  styleUrls: ['./creer-playlist.component.css']
})
export class CreerPlaylistComponent implements OnInit {
  playlist: Playlist;
  utilisateur: Utilisateur;

  constructor(private apiMempaBrokerService: ApiMempaBrokerService,
              private apiUtilisateurBrokerService: ApiUtilisateurBrokerService,
              private route: Router) { }

  ngOnInit(): void {
    this.playlist = new Playlist();
    this.utilisateur = new Utilisateur();
  }

  creer(): void{
    this.apiMempaBrokerService.ajouterPlaylist(this.playlist, this.utilisateur)
      .subscribe((data) => {
        this.route.navigate(['/ajouter', data.id]);
      });
  }
}
