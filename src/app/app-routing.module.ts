import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './views/championship/new/new.component';
import { ListComponent } from './views/championship/list/list.component';
import { ManageComponent } from './views/team/manage/manage.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';

const routes: Routes = [

  {path:"", component: NewComponent},
  {path:"list", component: ListComponent},
  {path:"teams", component: ManageComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
