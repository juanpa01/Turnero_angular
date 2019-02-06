import { Component, OnInit, Input } from '@angular/core';
import { Adviser } from 'src/app/model/adviser.model';
import { AdviserService } from '../adviser.service';
import { NextTurn } from 'src/app/model/nexTurn.model';
import { Display } from 'src/app/model/display.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input()
  adviser: Adviser;

  @Input()
  display: Display;

  constructor(private service: AdviserService) { }

  ngOnInit() {
  } 

  onClickNextTurn() {
    this.service.getnextturn(4)
                .subscribe(( nextTurn: NextTurn ) => {
                  alert('Siguiente turno' + nextTurn.name + ' asesor '+ nextTurn.adviser + 
                          ' categoria ' + nextTurn.category + ' actualizado ' + nextTurn.updated);
                });
  }

  onClickEndTurn() {
    this.service.getendturn(4)
                .subscribe((turn: NextTurn) => {
                  alert('Turno finalizado!.');
                });
  }

  onClickReCall() {
    this.service.getrecall(4)
                .subscribe(( display: Display ) => {
                  alert('Volver a llamar');
                });
  }
}
