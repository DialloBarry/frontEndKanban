import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth=false;
  appareils=[
    {name: 'machine a laver',
    status:'allumé'
  },
  {name: 'tele',
  status:'eteint'
},
{name: 'pc',
status:'allumé'
}

  ]
  /*appareil1: string="machine a lave";
  appareil2:string="tvs";
  appareil3:string="ordinateur";*/

  constructor(){
    setTimeout(() => { this.isAuth=true }, 4000);

  }
  onTurnOn(){
    console.log('cest allumer');
  }
}
