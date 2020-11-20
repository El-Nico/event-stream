import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private db:DatabaseService) {}
  ngOnInit(): void {
    this.db.getAll().subscribe(events=>{
      console.log(events);
    })
  }

}
