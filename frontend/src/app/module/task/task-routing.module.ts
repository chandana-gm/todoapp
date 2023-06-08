import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendingtaskComponent } from './pendingtask/pendingtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CompletedtaskComponent } from './completedtask/completedtask.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  { path: '',redirectTo:'dashboard/home',pathMatch:'full' },


{path: 'dashboard',component:TaskComponent, canActivate:[AuthGuard],children:[
 

  {path:'',redirectTo:'dashboard/home', pathMatch:'full'},
  {path:'home',component: DashboardComponent},
  {path: 'pendingtask',component:PendingtaskComponent},
  {path: 'addtask',component:AddtaskComponent},
  {path: 'cmplttask',component:CompletedtaskComponent},
  // {path:'**',component:DashboardComponent},

]


},

];
// {path: 'task',component:TaskComponent},

//   {path:'',redirectTo:'addtask',pathMatch:'full'},
//   {path: 'pendingtask',component:PendingtaskComponent},
//   {path: 'addtask',component:AddtaskComponent},
//   {path: 'cmplttask',component:CompletedtaskComponent},







@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
