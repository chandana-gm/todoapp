import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { PendingtaskComponent } from './pendingtask/pendingtask.component';
import { CompletedtaskComponent } from './completedtask/completedtask.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TaskComponent,
    AddtaskComponent,
    PendingtaskComponent,
    CompletedtaskComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class TaskModule { }
