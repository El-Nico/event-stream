import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivedPageRoutingModule } from './archived-routing.module';

import { ArchivedPage } from './archived.page';
import { SharedModule } from '../shared/event/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivedPageRoutingModule,
    SharedModule
  ],
  declarations: [ArchivedPage]
})
export class ArchivedPageModule {}
