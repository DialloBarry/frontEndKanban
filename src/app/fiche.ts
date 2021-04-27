import { Section } from './user';
import { Utilisateur } from './utilisateur';


export class Fiche {
  id:  number=0;
  libelle:string = '';
  dateButoire: string = '';
  tempsEstime: number=0;
  user: Utilisateur = new Utilisateur();
  tag:  string[]|null=null;
  lieu:       string = '';
  url:         string = '';
  note:        string = '';
  //section: Section = new Section();
}

