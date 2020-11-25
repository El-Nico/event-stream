import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[EventComponent]
})
export class SharedModule { }
