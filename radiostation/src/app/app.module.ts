import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafePipePipe } from './pipes/safe-pipe.pipe';
import { PagerService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    NewsComponent,
    ProgramsComponent,
    ContactsComponent,
    FooterComponent,
    SafePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
