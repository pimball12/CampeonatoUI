import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './views/team/manage/manage.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewComponent } from './views/championship/new/new.component';
import { ListComponent } from './views/championship/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ManageComponent,
    NewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
