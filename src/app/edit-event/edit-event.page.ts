import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Event } from '../models';
import { EditService } from './edit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
eventToEdit:Event
editEventForm:FormGroup
  constructor(
    private editEventService:EditService,
    private dbService:DatabaseService,
    private router:Router
  ) { }

  ngOnInit() {
    var placeholderEvent: Event = {
      title: "test title",
      description: "test description",
      course: "mobile",
      dueDate: null,
      dueTime: null
    }
    this.editEventService._eventToEdit.subscribe(event => {
        this.eventToEdit = event
        placeholderEvent=event
    })

    this.editEventForm = new FormGroup({
      title: new FormControl(placeholderEvent.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(placeholderEvent.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      course: new FormControl(placeholderEvent.course, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dueDate: new FormControl(placeholderEvent.dueDate, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dueTime: new FormControl(placeholderEvent.dueTime, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onEdit(){

    var title = this.editEventForm.value.title
    var description = this.editEventForm.value.description
    var course = this.editEventForm.value.course
    var dueDate = this.editEventForm.value.dueDate
    var dueTime = this.editEventForm.value.dueTime
    var newEvent: Event = {
      title,
      description,
      course,
      dueDate,
      dueTime
    }
      var id=this.eventToEdit._id
      //edit the event at mongodatabase
      this.dbService.editEvent(id,newEvent).subscribe(res => {
        console.log(res)
      })
      this.router.navigateByUrl("/")
  }

}
