import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from 'enviorment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private router:Router) { }
  ngOnInit():void{
 
    // let imagePath =  baseUrl + localStorage.getItem( 'pic')
  }
 logout(){
  localStorage.clear()
  this.router.navigate(['user/usercom/home'])
 }


}
