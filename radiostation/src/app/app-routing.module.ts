import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'team', component: TeamComponent},
  {path: 'news', component: NewsComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: HomeComponent}
  // {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
