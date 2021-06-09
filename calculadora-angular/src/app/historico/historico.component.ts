import { Component, Input, OnInit } from '@angular/core';
import { Operacao } from '../model/operacao.model';
import { CalculadoraService} from '../service/calculadora.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

    transferencias: any[];

  constructor(private service: CalculadoraService) { }

  ngOnInit() {
    this.service.getTodas().subscribe((operacao: Operacao[]) =>{
      this.transferencias = operacao;
    })

  }

}
