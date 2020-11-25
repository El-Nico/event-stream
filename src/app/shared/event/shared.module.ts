import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';



@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule
  ],
  exports:[EventComponent]
})
export class SharedModule { }
