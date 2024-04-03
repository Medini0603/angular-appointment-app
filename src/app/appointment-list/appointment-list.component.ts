import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();
  appointments:Appointment[]=[]

  addAppointment(){
    //check if both desc and date exists
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppoint:Appointment={
        id:Date.now(),
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }
      // add the appointment to list 
      this.appointments.push(newAppoint)

      //to clear the input fileds
      this.newAppointmentDate=new Date()
      this.newAppointmentTitle=""

      //to alert the length of appointment array
      alert(this.appointments.length)
    }
  }
}
