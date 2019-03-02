import { Component, OnInit } from '@angular/core';
import {ChefsService} from '../../services/chefs.service';

@Component({
  selector: 'bns-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  more = false;

  constructor(public svc: ChefsService) { }

  ngOnInit() {
  }

}
