import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DatabaseService } from '../database.service';
import { EditService } from '../edit-event/edit.service';
import { Event } from '../models';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  addEventForm: FormGroup
  eventToEdit: Event
  constructor(
    private dbService: DatabaseService,
  ) { }

  ngOnInit() {
    var placeholderEvent: Event = {
      title: "test title",
      description: "test description",
      course: "mobile",
      dueDate: null,
      dueTime: null
    }
   

    this.addEventForm = new FormGroup({
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

  onAddEvent() {
    var title = this.addEventForm.value.title
    var description = this.addEventForm.value.description
    var course = this.addEventForm.value.course
    var dueDate = this.addEventForm.value.dueDate
    var dueTime = this.addEventForm.value.dueTime
    var newEvent: Event = {
      title,
      description,
      course,
      dueDate,
      dueTime
    }
    //post to mongodatabase
    this.dbService.createEvent(newEvent).subscribe(data => {
      console.log(data);
      this.addEventForm.reset();
    })
  }

}
