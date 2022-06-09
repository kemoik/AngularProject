import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Atest Recipe', 'This is simply a  test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSVDTs3JmAbe2Zhvut7Kb51YLzRFzSXJ3Qg&usqp=CAU')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
