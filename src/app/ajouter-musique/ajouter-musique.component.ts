import { Component, OnInit } from '@angular/core';
import {Musique} from '../Musique';

@Component({
  selector: 'app-ajouter-musique',
  templateUrl: './ajouter-musique.component.html',
  styleUrls: ['./ajouter-musique.component.css']
})
export class AjouterMusiqueComponent implements OnInit {

  musique: Musique;
  listeMusique: Musique[] = [];

  constructor() { }

  ngOnInit(): void {
    this.musique = new Musique();
  }

  public getListeMusique(): Musique[]{
    return this.listeMusique;
  }

  public ajouterMusiqueToListe(): void{
    this.listeMusique.push(this.musique);
  }
}
