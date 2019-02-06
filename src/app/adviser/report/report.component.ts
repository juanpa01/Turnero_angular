import { Component, OnInit, Input } from '@angular/core';
import { Display } from 'src/app/model/display.model';
import { Average } from 'src/app/model/average.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input()
  listReports: Array<Display>;

  @Input()
  average: Average;

  constructor() { }

  ngOnInit() {
  }

}
