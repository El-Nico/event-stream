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
    this.db.getAll().subscribe(events=>{
      this.events=events
    })
  }

}
