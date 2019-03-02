import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'bns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public svc: MenuService) { }

  ngOnInit() {
  }

}
