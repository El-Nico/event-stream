import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';



@NgModule({
  declarations: [EventComponent,NavbarMobileComponent, FooterMobileComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[EventComponent,NavbarMobileComponent, FooterMobileComponent]
})
export class SharedModule { }
