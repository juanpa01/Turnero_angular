import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/model/category.model'
import { KioskService } from '../kiosk.service';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent implements OnInit {

	categorias: Array<Category>;

  constructor(private service: KioskService) { }

  ngOnInit() {
    this.service.getcategories()
                .subscribe(categorias => {
                  this.categorias = categorias;
                });
  }

}
