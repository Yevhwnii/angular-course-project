import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipt',
      'Simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-scotch-quails-eggs-5177019.jpg?quality=90&resize=960,872'
    ),
    new Recipe(
      'Another one Recipt',
      'Simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-scotch-quails-eggs-5177019.jpg?quality=90&resize=960,872'
    ),
  ];
  @Output() selectedRecipeChange = new EventEmitter<Recipe>();

  constructor() {}

  onRecipeSelected(recipe: Recipe): void {
    this.selectedRecipeChange.emit(recipe);
  }

  ngOnInit(): void {}
}
