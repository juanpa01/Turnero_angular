import { Component, OnInit, Input } from '@angular/core';
import { AdviserService } from '../adviser.service';
import { Adviser } from 'src/app/model/adviser.model';
import { Display } from 'src/app/model/display.model';
import { Average } from 'src/app/model/average.model';

@Component({
  selector: 'app-adviser',
  templateUrl: './adviser.component.html',
  styleUrls: ['./adviser.component.css']
})
export class AdviserComponent implements OnInit {

  @Input()
  losts: Array<Display>;
  listReports: Array<Display>;
  average: Average;

  constructor(private service: AdviserService) { }

  ngOnInit() { 
    this.average = {
      minutes: 0
    }

    this.service.getlost()
                .subscribe(losts => {
                  this.losts = losts;
                });
    
    this.service.getlistreport(4)
                .subscribe(listReports => {
                  this.listReports = listReports;
                });
    
    this.service.getaverage(4)
                .subscribe(average => {
                  this.average = average;
                });
  }

}
