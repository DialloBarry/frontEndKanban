import { Component, OnInit } from '@angular/core';
import { FicheComponent } from '../fiche/fiche.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  afficheFiche(){

  }

}
