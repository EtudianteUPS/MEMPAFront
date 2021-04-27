import { Component, OnInit } from '@angular/core';
import {Playlist} from '../Playlist';
import {ApiMempaBrokerService} from '../api-mempa-broker.service';

@Component({
  selector: 'app-rechercher-playlist',
  templateUrl: './rechercher-playlist.component.html',
  styleUrls: ['./rechercher-playlist.component.css']
})
export class RechercherPlaylistComponent implements OnInit {
  lPlaylists: Playlist[] = [];
  id: number;
  nomPlaylist: any;
  style: any;
  /**
   * Constructeur qui récupère le service permettant de l'utiliser plus tard
   */
  constructor(private apiMempaBrokerService: ApiMempaBrokerService) {
  }

  ngOnInit(): void {
    this.apiMempaBrokerService.recupererListe().subscribe((data) => {
      this.lPlaylists = data;
    });
  }

  Search(){
    if (this.nomPlaylist == "") {
      this.ngOnInit();
    }else{
      this.lPlaylists = this.lPlaylists.filter(res =>{
        return res.nomPlaylist.toLocaleLowerCase().match(this.nomPlaylist.toLocaleLowerCase()) ||
        res.style.toLocaleLowerCase().match(this.style.toLocaleLowerCase());
      });
    }
  }



  key:string = 'id';
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
