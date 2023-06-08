import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddtaskService } from '../service/addtask.service';


@Component({
  selector: 'app-pendingtask',
  templateUrl: './pendingtask.component.html',
  styleUrls: ['./pendingtask.component.css']
})
export class PendingtaskComponent {
  constructor(private service: AddtaskService, private snackbar: MatSnackBar) { }


  taskList: any[] = [] //storing values while api calling
  // filteredList: any[] = []

  userId: any

  taskPriority = ''
  isSelected = false
  filteredList: any[] = []
  modalArray: any[] = []
  idModal: number = 0;
  taskId: number = 0;

  


  ngOnInit(): void {



    this.userId = localStorage.getItem('userId')
    // console.log(this.userId)
    this.loadPendingTasks()
  }

  loadPendingTasks() {

    this.service.fetchTasks(this.userId, 'pending').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {

      if (res.tasks.length > 0) {
        this.taskList = res.tasks
        this.filteredList = this.taskList
        console.log(this.taskList)
      }

    })

  }



  deleteTask(id: number, index: number) {

    this.service.removeTask(id).subscribe((res: { statusCode: number, msg: string }) => {

      console.log(res.msg)

      this.taskList.splice(index, 1)

      console.log(this.taskList)
      this.showSnackBar(res.msg, 'snackBarDanger')

    })



  }

  updateRow(selectedItem: any, index: number) {


    // console.log(selectedItem)

    const uploadedData = new FormData()

    let currentDate = new Date().toLocaleDateString()
    uploadedData.append('completion_date', currentDate)
    uploadedData.append('description', selectedItem['description'])
    uploadedData.append('task', selectedItem['task'])

    uploadedData.append('status', 'completed')
    uploadedData.append('user', this.userId)

    this.service.updateTask(selectedItem.id, uploadedData).subscribe((res: { statusCode: number, msg: string }) => {

      // console.log(res.msg)
      this.taskList.splice(index, 1)
      this.loadPendingTasks()

      console.log(this.idModal);

    })

  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 5000
    },)
  }


  filterTask() {

    if (this.taskPriority != 'all') {


      if (this.isSelected == false) {

        this.filteredList = this.taskList.filter((item: any) => {

          return item.priority.includes(this.taskPriority);
        });



        this.isSelected = true
      }

      else {


        this.filteredList = this.taskList
        this.filteredList = this.taskList.filter((item: any) => {

          return item.priority.includes(this.taskPriority);
        });
      }

    }

    else {
      this.filteredList = this.taskList
    }
  }


  // display values on modal
  modalFunction(selectedItem: any, index: number, id: number) {
    console.log("selectedItem  " + selectedItem['task'] + '    index  ' + index)
    this.modalTask = selectedItem['task']
    this.modalDescription = selectedItem['description']
    this.modalPriority = selectedItem['priority']
    this.idModal = id
    this.taskId = index
  }
  modalDescription = ''
  modalTask = ''
  modalPriority = ''

  modalChange(formData: any ) {
    // 
    // console.log(selectedItem)
    const uploadedData = new FormData()

    uploadedData.append('task', formData['task'])  //first task is the name that in the db ,formData['task'] is the field in the modal
    uploadedData.append('description', formData['description'])
    uploadedData.append('priority', formData['priority'])
    uploadedData.append('user', this.userId)


    this.service.modalTask(this.idModal, uploadedData).subscribe((res: { statusCode: number, msg: string, }) => {
      console.log(uploadedData);

      // this.loadPendingTasks()

      if (res.statusCode == 202) {
        console.log("inside")
        // console.log(res)
        this.showSnackBar(res.msg, 'snackBarSuccess')
        this.filteredList[this.taskId].description = formData['description']
        this.filteredList[this.taskId].priority = formData['priority']
        this.filteredList[this.taskId].task = formData['task']

        


      }
      else {
        this.showSnackBar(res.msg, 'snackBarDanger')
        console.log("outside")
      }


    })

  }
 
 


}

