import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListerPlaylistComponent } from './lister-playlist/lister-playlist.component';
import { DetailsPlaylistComponent } from './details-playlist/details-playlist.component';
import { CreerPlaylistComponent } from './creer-playlist/creer-playlist.component';
import { AjouterMusiqueComponent } from './ajouter-musique/ajouter-musique.component';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'creer', component: CreerPlaylistComponent},
  { path: 'ajouter/:id', component: AjouterMusiqueComponent},
  { path: 'lister', component: ListerPlaylistComponent},
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
    AjouterMusiqueComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
