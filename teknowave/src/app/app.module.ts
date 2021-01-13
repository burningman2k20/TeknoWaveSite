import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ChampionsComponent } from './champions/champions.component';
import { StudentsComponent } from './students/students.component';
import { PartnersComponent } from './partners/partners.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProgramsComponent } from './programs/programs.component';
import { CommunityInternProgramComponent } from './community-intern-program/community-intern-program.component';
import { JosephTNortonScholarshipComponent } from './joseph-t-norton-scholarship/joseph-t-norton-scholarship.component';
import { LinksComponent } from './links/links.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommunitiesComponent } from './communities/communities.component';
import { AcademicComponent } from './academic/academic.component';
import { CorporateComponent } from './corporate/corporate.component';
import { GovernmentComponent } from './government/government.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChampionsComponent,
    StudentsComponent,
    PartnersComponent,
    JobsComponent,
    ProgramsComponent,
    CommunityInternProgramComponent,
    JosephTNortonScholarshipComponent,
    LinksComponent,
    DownloadsComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    CommunitiesComponent,
    AcademicComponent,
    CorporateComponent,
    GovernmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
   // NgxTypedJsModule,
    AppRoutingModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
