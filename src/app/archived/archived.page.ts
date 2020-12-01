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
      events=events.filter(event=>{
        var d= new Date(event.dueDate).getTime();
        var now = new Date().getTime();
        return d<now;
      })
      //sort by most recent deadline
      events=events.sort((a: Event, b: Event) => {
        a.dueDate=new Date(a.dueDate);
        b.dueDate=new Date(b.dueDate)
        return b.dueDate.getTime() - a.dueDate.getTime()  ;
    });
      this.events=events;
    })
  }

}
