import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { ChampionsComponent} from './champions/champions.component';
import { HomeComponent} from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { PartnersComponent } from './partners/partners.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CorporateComponent } from './corporate/corporate.component';
import { AcademicComponent } from './academic/academic.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'partner', component: PartnersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: '' , component: HomeComponent },

  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
