import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {ApiMempaBrokerService} from './_broker/api-mempa-broker.service';
import {ApiUtilisateurBrokerService} from './_broker/api-utilisateur-broker.service';

import { AppComponent } from './app.component';
import { ListerPlaylistComponent } from './lister-playlist/lister-playlist.component';
import { DetailsPlaylistComponent } from './details-playlist/details-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { AjouterMusiqueComponent } from './ajouter-musique/ajouter-musique.component';
import { RechercherPlaylistComponent } from './rechercher-playlist/rechercher-playlist.component';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
import {AuthGuard} from './_helpers/auth-guard';




const appRoutes: Routes = [
  { path: 'creer', component: CreerPlaylistComponent},
  { path: 'ajouter/:id', component: AjouterMusiqueComponent},
  { path: 'lister', component: ListerPlaylistComponent},
  { path: 'rechercher', component: RechercherPlaylistComponent},
  { path: 'details/:id', component: DetailsPlaylistComponent},
  { path: 'inscription', component: InscriptionUtilisateurComponent},
  { path: 'connexion', component: ConnexionUtilisateurComponent},
  { path: '', component: ConnexionUtilisateurComponent},
  { path: '**', component: ListerPlaylistComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ListerPlaylistComponent,
    DetailsPlaylistComponent,
    CreerPlaylistComponent,
    AjouterMusiqueComponent,
    RechercherPlaylistComponent,
    ConnexionUtilisateurComponent,
    InscriptionUtilisateurComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [ApiMempaBrokerService, ApiUtilisateurBrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
