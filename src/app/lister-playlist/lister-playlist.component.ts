import { Component, OnInit } from '@angular/core';
import {Playlist} from '../_model/Playlist';
// import {Utilisateur} from '../Utilisateur';
// import {Musique} from '../Musique';
import {ApiMempaBrokerService} from '../_broker/api-mempa-broker.service';

@Component({
  selector: 'app-lister-playlist',
  templateUrl: './lister-playlist.component.html',
  styleUrls: ['./lister-playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  lPlaylists: Playlist[] = [];

  /**
   * Constructeur qui récupère le service permettant de l'utiliser plus tard
   */
  constructor(private apiMempaBrokerService: ApiMempaBrokerService) { }

  ngOnInit(): void {
    this.apiMempaBrokerService.recupererListe().subscribe((data) => { this.lPlaylists = data; });
    // const u1 = new Utilisateur();
    // u1.id = 1;
    // u1.nomUtilisateur = 'Sophia';
    //
    // const u2 = new Utilisateur();
    // u1.id = 2;
    // u1.nomUtilisateur = 'Lina';
    //
    // const m1 = new Musique();
    // m1.id = 1;
    // m1.nomArtiste = 'Scarlxrd';
    // m1.titre = 'SX SAD';
    //
    // const m2 = new Musique();
    // m2.id = 2;
    // m2.nomArtiste = 'Scarlxrd';
    // m2.titre = 'PERFECT';
    //
    // const m3 = new Musique();
    // m3.id = 3;
    // m3.nomArtiste = 'Dan Black';
    // m3.titre = 'Symphonies';
    //
    // const m4 = new Musique();
    // m4.id = 4;
    // m4.nomArtiste = 'Ark Patrol';
    // m4.titre = 'Hex';
    //
    // const p1 = new Playlist();
    // p1.id = 1;
    // p1.nomPlaylist = 'Playlist 1';
    // p1.nomCreateur = u1.nomUtilisateur;
    // p1.nbClics = 0;
    // p1.style = 'metal rap';
    // p1.listeMorceaux.push(m1);
    // p1.listeMorceaux.push(m2);
    // p1.listeContributeurs.push(u1);
    // p1.listeContributeurs.push(u2);
    // this.lPlaylists.push(p1);
    //
    // const p2 = new Playlist();
    // p2.id = 2;
    // p2.nomPlaylist = 'Playlist 2';
    // p2.nomCreateur = u2.nomUtilisateur;
    // p2.nbClics = 9;
    // p2.style = 'electro';
    // p2.listeMorceaux.push(m3);
    // p2.listeMorceaux.push(m4);
    // p2.listeContributeurs.push(u2);
    // this.lPlaylists.push(p2);
  }
}
