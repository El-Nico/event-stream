import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Event } from 'src/app/models';
import { take } from 'rxjs/operators';
import { EditService } from 'src/app/edit-event/edit.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
@Input() event:Event
imgSrc:string;
imgSize:string;
timestamp={
  days:0,
  hours:0,
  minutes:0,
  seconds:0
}

  constructor(
    private dbService:DatabaseService,
    private editService:EditService,
    private router:Router
    ) { }

  ngOnInit() {
    this.imgSize="400";
    this.imgSrc=`https://source.unsplash.com/${this.imgSize}x${this.imgSize}/?${this.event.course}`;

    //a subscription that emits a new timestamp every second
    timer(0,1000).subscribe(val=>{
      // console.log(val);
      // Get todays date and time
    var now = new Date().getTime();

    //duedate
    var countDownDate= new Date(this.event.dueDate).getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

        this.timestamp={
          days,
          hours,
          minutes,
          seconds
        }
    })
  }

  doEdit(){
    const myEvent=this.event
    this.editService.nextEvent(myEvent)
    this.router.navigateByUrl(`/edit-event/${myEvent._id}`)
  }
  doDelete(){
    const eventId=this.event._id;
    this.dbService.delete(eventId).pipe(take(1)).subscribe(res=>{
      window.location.href="/"
    })
  }

}
