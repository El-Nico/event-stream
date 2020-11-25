import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Event } from '../models';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
addEventForm: FormGroup
  constructor(private dbService:DatabaseService) { }

  ngOnInit() {
    this.addEventForm = new FormGroup({
      title: new FormControl("testtitle", {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl("testdesc", {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      course: new FormControl("mobile", {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dueDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dueTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onAddEvent(){
    var title=this.addEventForm.value.title
    var description=this.addEventForm.value.description
    var course=this.addEventForm.value.course
    var dueDate=this.addEventForm.value.dueDate
    var dueTime=this.addEventForm.value.dueTime
    var newEvent:Event= {
      title,
      description,
      course,
      dueDate,
      dueTime
    }
    //post to mongodatabase
    this.dbService.createEvent(newEvent).subscribe(data=>{
      console.log(data);
    })
  }

}
