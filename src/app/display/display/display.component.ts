import { Component, OnInit } from '@angular/core';
import {Adviser} from 'src/app/model/adviser.model'
import {Category} from 'src/app/model/category.model'
import {Turn} from 'src/app/model/turn.model'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  adviser: Adviser;
  turns: Array<Turn>;
  category: Category;

  constructor() { }

  ngOnInit() {  }

}
