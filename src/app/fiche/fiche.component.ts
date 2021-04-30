import { Section } from './../section';
import { User } from './../user';
//import { Fiche } from './../user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';
import { CalendarModule } from 'primeng/calendar';
import { FicheService } from '../fiche.service';
import { SectionService } from '../section.service';


@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  users: any = [];
  section: any = [];
  fiche = {
    label: '',
    tempsestime: 0,
    lieu: '',
    username: this.users[0],
    dateButoire: '',
    section: this.section[0],
    notes: '',
    tag: '',
    url: ''
  };



  constructor(private userAPI: UserServiceService, private fichesAPI: FicheService, private sectionService: SectionService) {

  }

  ngOnInit(): void {

    this.userAPI.getusers().subscribe((data) => {
      this.fillUsers(data);
      console.log("users inside foreach : " + JSON.stringify(this.users));
    });

    this.sectionService.getSection().subscribe((data) => {
      this.fillSection(data);
      console.log("users inside foreach : " + JSON.stringify(this.users));
    });

  }

  fillSection(section: any[]) {
    section.forEach((section: any) => this.section.push(section));
  }

  fillUsers(users: any[]) {
    users.forEach((user: any) => this.users.push(user));
    console.log("users after : " + JSON.stringify(this.users));
  }

  savefiche() {
    const user = this.getSelectedUser(this.fiche.username);
    const section = this.getSelectedSection(this.fiche.section);
    console.log("selected user : " + JSON.stringify(user));
    const data = {
      libelle: this.fiche.label,
      dateButoire: this.fiche.dateButoire,
      tempsEstime: this.fiche.tempsestime,
      //tempsEstime: 2,
      user: { "id": user.id, "name": user.name },
      section: { "id": section.id, "status": section.status },
      tag: [this.fiche.tag],
      lieu: this.fiche.lieu,
      url: this.fiche.url,
      note: this.fiche.notes,

    };

    this.fichesAPI.create(data).subscribe(() => {
      console.log('tout va bien : ' + JSON.stringify(data));

    }, (error) => { });



  }

  getSelectedUser(name: any): User {
    console.log("name selected : " + name);
    const userIndex = this.users.findIndex((user: User) => user.name === name)
    console.log("userIndex : " + userIndex);
    return this.users[userIndex];
  }

  getSelectedSection(status: any): Section {
    console.log("status selected : " + status);
    const sectionIndex = this.section.findIndex((section: Section) => section.status === status)
    console.log("status : " + sectionIndex);
    return this.section[sectionIndex];
  }

  onSubmit() {

      this.savefiche();

  }


}
