import { Component, Input, OnInit } from '@angular/core';
import { CalculadoraServiceService } from '../service/calculadora-service.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

    transferencias: any[];

  constructor(private service: CalculadoraServiceService) { }

  ngOnInit() {
    this.transferencias = this.service.transferencias;
  }

}
