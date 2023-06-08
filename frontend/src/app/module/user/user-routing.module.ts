import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SighupComponent } from './sighup/sighup.component';
// import { DashboardComponent } from '../task/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'usercom/home', pathMatch: 'full' },
  {
    path: 'usercom', component: UserComponent, children: [

      { path: '', redirectTo: 'usercom/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SighupComponent },
    ]


  },

  // {path:'**',component:UserComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
