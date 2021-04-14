import { Component, OnInit } from '@angular/core';
import {Playlist} from '../Playlist';

@Component({
  selector: 'app-creer-playlist',
  templateUrl: './creer-playlist.component.html',
  styleUrls: ['./creer-playlist.component.css']
})
export class CreerPlaylistComponent implements OnInit {
  playlist: Playlist;

  constructor() { }

  ngOnInit(): void {
    this.playlist = new Playlist();
  }

  /*creer(): void{
    const routerLink = '/details/{{playlist.id}}';

  }*/
}
