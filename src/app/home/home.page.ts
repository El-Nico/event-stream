import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Event } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
events: Event[];
  constructor(private db:DatabaseService) {}
  ngOnInit(): void {
    //get all events from database
    this.db.getAll().
    subscribe(events=>{
      //only display events that are within the deadline on homepage, rest go to archived
      this.events=events.filter(event=>{
        var d= new Date(event.dueDate).getTime();
        var now = new Date().getTime();
        return d>now;
      })
    })
  }

}
