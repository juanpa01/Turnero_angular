import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { Display } from 'src/app/model/display.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  display: Array<Display>;

  constructor(private service: DisplayService) { }

  ngOnInit() {
    this.service.getdisplay()
                .subscribe(display => {
                  this.display = display;
                });
  }

}
