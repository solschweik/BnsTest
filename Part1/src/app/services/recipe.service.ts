import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() {
  }

  // noinspection JSMethodCanBeStatic
  get currentInfo(): Observable<any> {
    return of({
      title: `Fichipizza`,
      summary: `A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando
      panado, honey and arugula.`,
      details: `The pizza bases in Naples are soft and pliable. In Rome they prefer a thin and crispy base. Another popular form of pizza
      in Italy is pizza al taglio (cut into squares) which is baked in rectangular trays with a wide variety of toppings and sold by weight.
      This is the variety of pizza that we will make today. This recipe will be made in a conventional oven and the heat required for this
      pizza won’t be as high as what’s required to make a pizza verace in a domed ceramic pizza oven. Stay tuned, however, as later this
      month I will be posting some authentic pizza recipes that are for domed ceramic pizza ovens. Blisters and bubbles and crunch, oh my!
      Can’t wait! So let’s roll up our sleeves and get started on this pizza Bianca.`
    });
  }
}
