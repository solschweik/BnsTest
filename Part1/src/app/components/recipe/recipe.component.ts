import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'bns-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  more = false;

  constructor(public svc: RecipeService) { }

  ngOnInit() {
  }

}
