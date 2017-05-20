import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Test Recipe', 'This is simply a test', 'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/53/13/29/5dzbG6yjRe6fo86mu0TZ_BurritoBowl_2.JPG'),
      new Recipe('Test Recipe', 'This is simply a test', 'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/53/13/29/5dzbG6yjRe6fo86mu0TZ_BurritoBowl_2.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

}
