import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FicheComponent } from './fiche/fiche.component';
import { SectionComponent } from './section/section.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 // { path: '', component: FicheComponent },
  { path: 'fiche', component: FicheComponent },
  { path: 'fiche/:id', component: FicheComponent },
  { path: 'user', component: UserComponent },
 {  path: 'acc', component: AppComponent },
  { path: 'section', component: SectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
