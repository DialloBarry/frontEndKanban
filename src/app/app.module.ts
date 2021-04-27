import { SectionComponent } from './section/section.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FicheComponent } from './fiche/fiche.component';
import { HttpClientModule } from '@angular/common/http'
import { CustomFormsModule } from 'ng2-validation';
import { UserComponent } from './user/user.component';
// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccueilComponent } from './accueil/accueil.component';
import { IgxLayoutModule } from "igniteui-angular";
// import { LayoutSampleComponent } from "./layout/layout-sample/layout-sample.component";





@NgModule({
  declarations: [
    AppComponent,

    NavigationBarComponent,

    FicheComponent,

    // LayoutSampleComponent,
    UserComponent,
    SectionComponent,
    AccueilComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomFormsModule,
    HttpClientModule,
    BrowserModule,
    IgxLayoutModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()


  ],
  providers: [],
  entryComponents: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
