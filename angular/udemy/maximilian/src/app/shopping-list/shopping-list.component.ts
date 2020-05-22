import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  add(productName: string): any {
    this.ingredients.push(new Ingredient(productName, 4));
  }

  remove(id: number) {
    const position = id + 1;
    this.ingredients.splice(position + 1, 1);
    console.log(position);
  }

}



