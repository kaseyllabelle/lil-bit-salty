import { Component, OnInit } from '@angular/core';
import { recipes } from './recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {
  recipes = recipes;
  constructor() { }
  ngOnInit(): void { }
}