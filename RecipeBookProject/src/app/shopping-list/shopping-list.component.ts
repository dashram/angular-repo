import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Mutter', 150),
    new Ingredient('Paneer', 100)
  ];

  constructor() { }

  ngOnInit() {
  }

}
