import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Event } from 'src/app/models';
import { take } from 'rxjs/operators';
import { EditService } from 'src/app/edit-event/edit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
@Input() event:Event
imgSrc:string;
imgSize:string;

  constructor(
    private dbService:DatabaseService,
    private editService:EditService,
    private router:Router
    ) { }

  ngOnInit() {
    this.imgSize="400";
    this.imgSrc=`https://source.unsplash.com/${this.imgSize}x${this.imgSize}/?${this.event.course}`;
  }

  doEdit(){
    const myEvent=this.event
    this.editService.nextEvent(myEvent)
    this.router.navigateByUrl(`/edit-event/${myEvent._id}`)
  }
  doDelete(){
    const eventId=this.event._id;
    this.dbService.delete(eventId).pipe(take(1)).subscribe(res=>{
      console.log(res)
      window.location.href="/"
    })
  }

}
