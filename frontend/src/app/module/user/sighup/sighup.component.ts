import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from '../service/signup.service';


@Component({
  selector: 'app-sighup',
  templateUrl: './sighup.component.html',
  styleUrls: ['./sighup.component.css']
})
export class SighupComponent {
  constructor(private service: SignupService, private snackbar: MatSnackBar) { }

  userPic: any

  ngOnInit(): void {
  }

  submit(formData: any) {


    const uploadedData = new FormData()

    uploadedData.append('name', formData['name'])
    uploadedData.append('email', formData['email'])
    uploadedData.append('mobile', formData['mobile'])
    uploadedData.append('password', formData['password'])

    if (this.userPic != undefined) {
      uploadedData.append('image', this.userPic)
    }



    this.service.addTask(uploadedData).subscribe((res: { statusCode: number, message: string }) => {
      if (res.statusCode == 201) {

        this.showSnackBar(res.message, 'snackBarSuccess')
      }
      else {
        this.showSnackBar(res.message, 'snackBarDanger')
      }

    })

  }

  onImageChanged(event: any) {
    this.userPic = event.target.files[0]
    console.log(this.userPic)
  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }
}
