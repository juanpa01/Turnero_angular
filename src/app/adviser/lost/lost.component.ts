import { Component, OnInit, Input } from '@angular/core';
import { Display } from 'src/app/model/display.model';
import { AdviserService } from '../adviser.service';
import { Turn } from 'src/app/model/turn.model';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  @Input()
  losts: Array<Display>;

  constructor(private service: AdviserService) { }

  ngOnInit() {
  }

  onClickReCall(lost: Display) {
    this.service.getrecalllost(4, lost.turnId)
                .subscribe(( display: Display ) => {
                  alert('Volver a llamar');
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             );
  }

}
