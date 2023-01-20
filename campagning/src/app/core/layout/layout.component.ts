import { Component, Input, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  logochange: boolean | undefined;
  sidenavWidth = 5;
  @Input() sidenav!: MatSidenav;

  routes: {
    title: string;
    path: string;
    icon: string;
  }[] = [];

  increase(){
    this.sidenavWidth = 17;
    this.logochange = true;
  }
  decrease(){
    this.sidenavWidth = 5;
    this.logochange = false;
  }
  toggleMenu() {
    this.sidenav.toggle();
  }
  logout(){}
}
