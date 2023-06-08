import { Component } from '@angular/core';
import { baseUrl } from 'enviorment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor() { }
  userName :any
  imagePath : any
  ngOnInit():void{
 
    this.imagePath =  baseUrl + localStorage.getItem( 'pic')
  

    this.userName = localStorage.getItem('userName') || null
  }
}
