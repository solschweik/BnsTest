import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bns-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentSelectedItem = 'Home';

  constructor() { }

  ngOnInit() {
  }

}
