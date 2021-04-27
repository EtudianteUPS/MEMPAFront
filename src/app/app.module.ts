import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ListerPlaylistComponent } from './lister-playlist/lister-playlist.component';
import { DetailsPlaylistComponent } from './details-playlist/details-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { AjouterMusiqueComponent } from './ajouter-musique/ajouter-musique.component';
import { RechercherPlaylistComponent } from './rechercher-playlist/rechercher-playlist.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ApiMempaBrokerService} from './api-mempa-broker.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  { path: 'creer', component: CreerPlaylistComponent},
  { path: 'ajouter/:id', component: AjouterMusiqueComponent},
  { path: 'lister', component: ListerPlaylistComponent},
  { path: 'rechercher', component: RechercherPlaylistComponent},
  { path: 'details/:id', component: DetailsPlaylistComponent}, // on indique que l'id sera donné à notre composant routage
  { path: '', component: ListerPlaylistComponent},
  { path: '**', component: ListerPlaylistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListerPlaylistComponent,
    DetailsPlaylistComponent,
    CreerPlaylistComponent,
    AjouterMusiqueComponent,
    RechercherPlaylistComponent,
    AjouterUtilisateurComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, Ng2SearchPipeModule, Ng2OrderModule, NgxPaginationModule, FontAwesomeModule
  ],
  providers: [ApiMempaBrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
