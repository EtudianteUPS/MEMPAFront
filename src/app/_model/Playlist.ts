import {Musique} from './Musique';
import {Utilisateur} from './Utilisateur';

export class Playlist{
  id: number;
  nomPlaylist: string;
  nomCreateur: Utilisateur['nomUtilisateur'];
  nbClics: number;
  listeMorceaux: Musique[] = [];
  listeContributeurs: Utilisateur[] = [];
  style: string;
}
