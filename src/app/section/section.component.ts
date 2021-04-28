import { SectionService } from './../section.service';
import { Fiche } from './../user';
import { Component, OnInit } from '@angular/core';
import { FicheService } from '../fiche.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  fiches :any = [];
  namefiche=false;

  section = {
    status: '',
    fichename: this.fiches[0]
  }
  selectedFiches:any = [];
  constructor(private serviceFiche: FicheService , private serviceSection: SectionService) { }

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

  getSelectedfiche(libelle: any): Fiche {
    console.log("name selected : " + libelle);
    const ficheIndex = this.fiches.findIndex((fiche: Fiche) => fiche.libelle === libelle)
    console.log("userIndex : " + ficheIndex);
    return this.fiches[ficheIndex];
  }

  /**
   * For adding a fiche inside the section
   */
  addFiche(): void{
    this.selectedFiches.push(this.getSelectedfiche(this.section.fichename));
    console.log("Fiches after add operation : "+JSON.stringify(this.selectedFiches));


  }


  getFormattedFichesArray():any[]{
    const formattedFiches:any = [];
    for(const fiche of this.selectedFiches){
      formattedFiches.push({ "id": fiche.id, "libelle": fiche.libelle});
    }
    return formattedFiches;
  }

  saveSection() {
    //const fich = this.getSelectedfiche(this.section.fichename);
    //console.log("selected fiche : " + JSON.stringify(fich));
    const data = {
      status: this.section.status,
      //fiche:[  { "id": fich.id, "libelle": fich.libelle }],
      fiche: this.getFormattedFichesArray()
    }

    this.serviceSection.create(data).subscribe(() => {
      console.log('tout va bien : ' + JSON.stringify(data));
      this.selectedFiches = [];

    }, (error) => { });
  }
}
