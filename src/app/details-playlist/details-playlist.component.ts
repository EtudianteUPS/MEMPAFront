import { Component, OnInit } from '@angular/core';
// import {Utilisateur} from '../Utilisateur';
// import {Musique} from '../Musique';
import {Playlist} from '../_model/Playlist';
import {ApiMempaBrokerService} from '../_broker/api-mempa-broker.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details-playlist',
  templateUrl: './details-playlist.component.html',
  styleUrls: ['./details-playlist.component.css']
})
export class DetailsPlaylistComponent implements OnInit {

  playlist: Playlist;
  constructor(private apiMempaBrokerService: ApiMempaBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routeactive.snapshot.params.id; /*recupère l'id à partir du routage*/
    this.apiMempaBrokerService.getPlaylist(id).subscribe((data) => { this.playlist = data; });
  }

}
