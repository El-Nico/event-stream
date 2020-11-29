import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
})
export class NavbarMobileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  goHome(){
    this.router.navigateByUrl("/home")
  }

}
