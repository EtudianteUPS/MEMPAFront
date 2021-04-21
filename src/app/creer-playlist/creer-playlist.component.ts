import { Component, OnInit } from '@angular/core';
import {Playlist} from '../Playlist';
import {ApiMempaBrokerService} from '../api-mempa-broker.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creer-playlist',
  templateUrl: './creer-playlist.component.html',
  styleUrls: ['./creer-playlist.component.css']
})
export class CreerPlaylistComponent implements OnInit {
  playlist: Playlist;
  //pAjoutee: Playlist;

  constructor(private apiMempaBrokerService: ApiMempaBrokerService,
              private route: Router) { }

  ngOnInit(): void {
    this.playlist = new Playlist();
  }

  creer(): void{
    this.apiMempaBrokerService.ajouterPlaylist(this.playlist)
      .subscribe((data) => {/*this.pAjoutee = data;*/ this.route.navigate(['/ajouter', data.id]);
      });
  }
}
