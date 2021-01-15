import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { ChampionsComponent} from './champions/champions.component';
import { HomeComponent} from './home/home.component';

import { StudentsComponent } from './students/students.component';
import { PartnersComponent } from './partners/partners.component';
// Error Page Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ContactComponent } from './contact/contact.component';
import { CommunitiesComponent } from './communities/communities.component';

import { CorporateComponent } from './corporate/corporate.component';
import { AcademicComponent } from './academic/academic.component';
import { GovernmentComponent } from './government/government.component';

import { JobsComponent } from './jobs/jobs.component';
import { LinksComponent } from './links/links.component';

import { CeremonyComponent } from './ceremony/ceremony.component';
import { GraduationComponent } from './graduation/graduation.component';

import { ProgramsComponent } from './programs/programs.component';
import { BoardofdirectorsComponent } from './boardofdirectors/boardofdirectors.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'partner', component: PartnersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'government', component: GovernmentComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'ceremony' , component: CeremonyComponent },
  { path: 'graduation', component: GraduationComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'boardofdirectors', component: BoardofdirectorsComponent },
  { path: '' , component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
