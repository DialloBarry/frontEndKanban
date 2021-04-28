import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { FicheService } from '../fiche.service';
//import { Fiche } from '../fiche';
 import { Fiche } from '../fiche';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  fiches :any = [];
  incr=this.incremen();
   user = {
    name: '',
    fichename: this.fiches[this.incr]

  }
incremen():number{
  for (var i = 0; i < this.fiches.length; i++) {
    console.log(i);
 }
 return i;
}


  constructor(private serviceFiche: FicheService, private serviceUser: UserServiceService ) { }


  ngOnInit(): void {
    this.serviceFiche.getfiches().subscribe((data) => {
      this.fillfiches(data);
    });
    console.log(this.fiches.toString);
  }


  fillfiches(fiches:any[]){
    fiches.forEach((fiche:any) => this.fiches.push(fiche));
    console.log("fiches after : "+JSON.stringify(this.fiches));

  }

  saveUser(){
    const fiche = this.getSelectedfiche(this.user.fichename);
    console.log("selected fiche : " + JSON.stringify(fiche));
    const data = {
      name: this.user.name,
      fiche:[{ "id": fiche.id, "libelle": fiche.libelle }],

    };
    this.serviceUser.create(data).subscribe(() => {
      console.log('tout va bien : ' + JSON.stringify(data));

    }, (error) => { });

  }

  getSelectedfiche(libelle: any): Fiche {
    console.log(" fiche name :"+libelle);
    const ficheIndex = this.fiches.findIndex((fiche: Fiche) => fiche.libelle === libelle)
    console.log("ficheindex : " + ficheIndex);

    return this.fiches[ficheIndex];
  }
 onSubmit(){
   this.saveUser();
 }
}
