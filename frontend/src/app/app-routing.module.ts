import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path:'home',component:HomeComponent},
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'login',component:LoginComponent},
  // {path:'signup',component:SignupComponent},
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'task', loadChildren: () => import('./module/task/task.module').then(m => m.TaskModule) },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
