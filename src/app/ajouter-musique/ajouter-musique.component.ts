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
      console.log('playlist : '); console.log(this.playlist);
      this.refreshPage();
      console.log('playlist apres: '); console.log(this.playlist);
  }

  private refreshPage(): void {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    console.log('current url : ' + currentUrl);
  }

  sauvagarder(): void {
    // this.showAlert('La playlist a bien été créée !', 'success');
  }

  // private showAlert(message, className): void {
  //   const alertes = document.getElementById('alertes');
  //
  //   alertes.innerHTML = '';
  //
  //   const div = document.createElement('alert');
  //   div.className = `alert alert-${className}`;
  //   div.appendChild(document.createTextNode(message));
  //
  //   alertes.appendChild(div);
  //
  //   // Vanish in 3 seconds
  //   setTimeout(() => document.querySelector('.alert').remove(), 3000);
  // }
}
