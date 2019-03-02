import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  constructor() { }

  // noinspection JSMethodCanBeStatic
  get info(): Observable<any> {
    return of({
      name: `Tommy McHugh`,
      title: `Executive Chef`,
      info: `Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary
      world, he specializes in creating mouthwatering Mediterranean-Italian experiences.`
    });
  }
}
