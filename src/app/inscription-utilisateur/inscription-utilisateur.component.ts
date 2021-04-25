import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../_model/Utilisateur';
import {ApiUtilisateurBrokerService} from '../_broker/api-utilisateur-broker.service';
// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.component.html',
  styleUrls: ['./inscription-utilisateur.component.css']
})
export class InscriptionUtilisateurComponent implements OnInit {
  utilisateur: Utilisateur;

  constructor(private apiUtilisateurBrokerService: ApiUtilisateurBrokerService) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  inscrire(): void{
    this.apiUtilisateurBrokerService.inscrire(this.utilisateur);
  }
}
