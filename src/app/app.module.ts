import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ChampionshipComponent } from './templates/championship/championship.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './views/team/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChampionshipComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
