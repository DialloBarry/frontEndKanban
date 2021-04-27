export interface UserDetail {
  id:    number;
  name:  string;
  fiche: Fiche[];
}

export interface Fiche {
  id:          number;
  libelle:     null | string;
  dateButoire: number;
  tempsEstime: number;
  user:        User;
  tag:         string[];
  lieu:        null;
  url:         null;
  note:        null;
  section:     Section;
}

export interface Section {
  id:     number;
  status: string;
}

export interface User {
  id:   number;
  name: string;
}

