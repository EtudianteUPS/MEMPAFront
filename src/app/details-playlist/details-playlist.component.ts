import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../Utilisateur';
import {Musique} from '../Musique';
import {Playlist} from '../Playlist';

@Component({
  selector: 'app-details-playlist',
  templateUrl: './details-playlist.component.html',
  styleUrls: ['./details-playlist.component.css']
})
export class DetailsPlaylistComponent implements OnInit {

  playlist: Playlist;
  constructor() { }

  ngOnInit(): void {
    const u1 = new Utilisateur();
    u1.id = 1;
    u1.nomUtilisateur = 'Sophia';

    const u2 = new Utilisateur();
    u2.id = 2;
    u2.nomUtilisateur = 'Lina';

    const m1 = new Musique();
    m1.id = 1;
    m1.nomArtiste = 'Scarlxrd';
    m1.titre = 'SX SAD';

    const m2 = new Musique();
    m2.id = 2;
    m2.nomArtiste = 'Scarlxrd';
    m2.titre = 'PERFECT';

    this.playlist = new Playlist();
    this.playlist.id = 1;
    this.playlist.nomPlaylist = 'Playlist 1';
    this.playlist.nomCreateur = u1.nomUtilisateur;
    this.playlist.nbClics = 0;
    this.playlist.style = 'metal rap';
    this.playlist.listeMorceaux.push(m1);
    this.playlist.listeMorceaux.push(m2);
    this.playlist.listeContributeurs.push(u1);
    this.playlist.listeContributeurs.push(u2);
  }

}
