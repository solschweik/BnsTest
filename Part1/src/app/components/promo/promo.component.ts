import { Component, OnInit } from '@angular/core';
import {PromoService} from '../../services/promo.service';

@Component({
  selector: 'bns-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  more = false;

  constructor(public svc: PromoService) { }

  ngOnInit() {
  }

}
