import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../../model/category.model';
import { KioskService } from '../kiosk.service';
import { Turn } from 'src/app/model/turn.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	@Input()
	category: Category;  

  constructor(private service: KioskService) { }

  ngOnInit() {
  }

  onClick() {
    this.service.getTurn(this.category.id)
                .subscribe((turn: Turn) => {
                  alert('Imprimiendo el turno ' + turn.name );
                });
  }

}
