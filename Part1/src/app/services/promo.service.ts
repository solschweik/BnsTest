import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor() { }

  // noinspection JSMethodCanBeStatic
  get currentPromo(): Observable<any> {
    return of({
      title: `Weekend Grand Buffet`,
      summary: `Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and
      five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person`,
      details: `Grand Buffet’s enormous array of cuisine is sure to grant your culinary wishes. From the Champagne brunch to the endless
      beer and wine with our dinner Prime Rib and Crab Legs, guests will find plenty of favorite dishes.`
    });
  }
}
