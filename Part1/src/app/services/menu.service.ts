import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
  }

  // noinspection JSMethodCanBeStatic
  get menus(): Observable<any[]> {
    return of([{
        category: 'APPETIZERS',
        info: '',
        items: [{
          name: 'CALAMARI',
          img: 'Calamari.jpeg',
          info: 'Lightly battered calamari, Cajun spices, ancho-chipotle sauce',
          price: 15
        }, {
          name: 'SPINACH DIP',
          img: 'SpinachDip.jpg',
          info: 'Warm blend of spinach, artichoke hearts & cheese, tortilla chips, salsa, sour cream',
          price: 14
        }, {
          name: 'CREVETTES',
          img: 'Crevettes.jpg',
          info: 'Lightly battered calamari, Cajun spices, ancho-chipotle sauce',
          price: 15
        }, {
          name: 'MAYO DIP',
          img: 'MayoDip.jpg',
          info: 'Warm blend of spinach, artichoke hearts & cheese, tortilla chips, salsa, sour cream',
          price: 14
        }]
      }, {
        category: 'SALADS',
        info: `Our made-from-scratch dressing: honey-mustard, garlic ranch, Italian, creamy blue cheese, lime-ginger or pineapple-soy.`,
        items: [{
          name: 'GENERAL TAO CHICKEN',
          img: 'GeneralTaoChicken.jpg',
          info: `Hand-battered chicken tenders, General Tao sauce, mixed greens, red peppers, walnuts, sesame seeds,
            crispy noodles,lime-ginger dressing`,
          price: 18
        },
          {
            name: 'SESAME TUNA',
            info: 'Sesame seared-rare Ahi tuna, mixed greens, roasted edamame, lime-ginger dressing',
            img: 'SesameTuna.jpg',
            price: 25
          }, {
            name: 'JULIUS CESAR SALAD',
            img: 'Cesar.jpg',
            info: `Hand-battered chicken tenders, General Tao sauce, mixed greens, red peppers, walnuts, sesame seeds,
            crispy noodles,lime-ginger dressing`,
            price: 18
          },
          {
            name: 'GARDEN EXPRESS SALAD',
            img: 'GardenSalad.jpg',
            info: 'Sesame seared-rare Ahi tuna, mixed greens, roasted edamame, lime-ginger dressing',
            price: 25
          }]
      }, {
      category: 'SANDWICHES & BURGERS',
      info: `Served with your choice of French fries or coleslaw.`,
      items: [{
        name: 'BIG DEVIL BURGER',
        img: 'BidDevilBurger.jpeg',
        info: `8 oz. freshly ground chuck, onion rings, tomatoes, Swiss cheese, smoked bacon, sweet & spicy BBQ sauce`,
        price: 19
      },
        {
          name: 'BÂTON ROUGE BURGER',
          img: 'BatonRougeBurger.jpg',
          info: 'Half-pound of premium beef, smoked bacon, Monterey Jack cheese, lettuce, tomato, red onions, Dijonnaise sauce',
          price: 18
        }, {
          name: 'SUPER BURGER',
          img: 'SuperBurger.jpg',
          info: `8 oz. freshly ground chuck, onion rings, tomatoes, Swiss cheese, smoked bacon, sweet & spicy BBQ sauce`,
          price: 19
        },
        {
          name: 'Macky Mc Mac BURGER',
          img: 'SomethingBurger.jpeg',
          info: 'Half-pound of premium beef, smoked bacon, Monterey Jack cheese, lettuce, tomato, red onions, Dijonnaise sauce',
          price: 18
        }]
    }]);
  }
}
