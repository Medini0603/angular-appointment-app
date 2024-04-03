import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  
  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();
  appointments:Appointment[]=[]

  // gets invoked when this component gets initialized 
  ngOnInit(): void {
    console.log("Got loaded")
    let savedAppointments=localStorage.getItem('appointments')
    //assign the appointments stored in local storage to the appointments arrays everytime we refresh page
    // if appointments are already there parse it and load it into appointments array else initialize it to an empty array
    // if we dont do this if we refresh page the appointments array becomes empty
    this.appointments=savedAppointments?JSON.parse(savedAppointments):[]
}
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

      //to store our appointments array in localstorage with the key name as appointments
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
      //to alert the length of appointment array
      // alert(this.appointments.length)
    }
  }
  
  deleteAppointment(index:number){
    //from which index and how many elements
    this.appointments.splice(index,1)
    //store again after delete too
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
}
