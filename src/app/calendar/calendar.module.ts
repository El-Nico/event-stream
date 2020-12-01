import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule,
    SharedModule
  ],
  declarations: [CalendarPage],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-ie'}
  ]
})
export class CalendarPageModule {}
