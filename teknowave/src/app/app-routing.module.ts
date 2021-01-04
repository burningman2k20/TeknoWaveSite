import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { ChampionsComponent} from './champions/champions.component';
import { HomeComponent} from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
  //{ path: '/' , component: HomeComponent },
  { path: '*' , component: HomeComponent } // Wildcard route for a 404 page
 // { path: '**', component: HomeComponent }
  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: 'second-component', component: SecondComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
