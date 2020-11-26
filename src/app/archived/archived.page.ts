import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Event } from '../models';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {
events:Event[]
  constructor(
    private db:DatabaseService
  ) { }

  ngOnInit() {
    //get all events from database
    this.db.getAll().
    subscribe(events=>{
      //only display events that have exceeded the deadline on archived, rest go to homepage
      this.events=events.filter(event=>{
        var d= new Date(event.dueDate).getTime();
        var now = new Date().getTime();
        return d<now;
      })
    })
  }

}
