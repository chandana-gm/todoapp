import { Component, OnInit } from '@angular/core';
import { AddtaskService } from '../service/addtask.service';

@Component({
  selector: 'app-completedtask',
  templateUrl: './completedtask.component.html',
  styleUrls: ['./completedtask.component.css']
})
export class CompletedtaskComponent implements OnInit {


  userId: any;

 
  taskList : any[]=[]
  showSpinner = false
  searchText: string = ''
  
  constructor(private service: AddtaskService) { }

ngOnInit(): any {

  this.userId = localStorage.getItem('userId')

  this.loadCompletedTasks()
}


loadCompletedTasks() {

  this.service.fetchTasks(this.userId, 'completed').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {

    this.taskList = res.tasks

    console.log(this.taskList, this.userId)

  })

}


  searchItems(){
    console.log(this.searchText)
    setTimeout(() => {
      this.showSpinner = true
    }, 1000);
   
    setTimeout(() => {
    
      
       this.service.searchTask(this.userId, this.searchText).subscribe((res: { statusCode: number, searchResult: any[], msg: string }) => {

      this.taskList = res.searchResult
      console.log(this.taskList)
     
    })
    this.showSpinner = false
    }, 2000);
   

  }

}