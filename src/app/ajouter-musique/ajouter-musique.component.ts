import { Component, OnInit } from '@angular/core';
import {Musique} from '../_model/Musique';
import {ApiMempaBrokerService} from '../_broker/api-mempa-broker.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Playlist} from '../_model/Playlist';

@Component({
  selector: 'app-ajouter-musique',
  templateUrl: './ajouter-musique.component.html',
  styleUrls: ['./ajouter-musique.component.css']
})
export class AjouterMusiqueComponent implements OnInit {
  musique: Musique;
  playlist: Playlist;

  constructor(private apiMempaBrokerService: ApiMempaBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    this.musique = new Musique();
    const id = this.routeactive.snapshot.params.id; /*recupère l'id à partir du routage*/
    this.apiMempaBrokerService.getPlaylist(id).subscribe((data) => { this.playlist = data; });
  }


  ajouterMusiqueToPlaylist(): void{
      this.apiMempaBrokerService.ajouterMorceau(this.playlist.id, this.musique);
      this.refreshPage();
      console.log('playlist apres: '); console.log(this.playlist);
  }

  private refreshPage(): void {
    // const currentUrl = this.router.url;
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate([currentUrl]);
    // console.log('current url : ' + currentUrl);
    document.location.reload();
  }

  sauvegarder(): void {
    // this.showAlert('La playlist a bien été créée !', 'success');
  }
}
