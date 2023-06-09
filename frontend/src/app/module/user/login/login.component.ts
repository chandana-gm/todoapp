import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // submit(data:NgForm){
  //   console.log(data);
  constructor(private service: LoginService,  private snackbar: MatSnackBar , private router: Router) { }


  submit(formData: any){

    this.service.userLogin(formData).subscribe((res: { statusCode: number,token: string, userId: number, userName: string ,message: string, pic:string}) => {
      if (res.statusCode == 200) {

        localStorage.setItem('token', res.token)
        localStorage.setItem('userId', res.userId.toString())
        localStorage.setItem('userName', res.userName)
        localStorage.setItem('pic', res.pic)

        this.router.navigate(['/task/dashboard/home'])
      }
      else{
        this.showSnackBar(res.message,'snackBarDanger')
      }

    })
  
  }
  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  } 
  }

