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
    prenom: '',
    adresse: ''


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

    const data = {
      name: this.user.name,
      prenom: this.user.prenom,
      adresse: this.user.adresse,

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
