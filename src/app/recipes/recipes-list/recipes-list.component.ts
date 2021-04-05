import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
