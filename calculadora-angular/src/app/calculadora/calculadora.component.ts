import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Operacao } from '../model/operacao.model';
import { CalculadoraService } from '../service/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  public valor1: number;
  public valor2: number;

  public valorOperacao: number;

  public listaOperacao = {soma: null, subtracao: null, multiplicacao: null, divisao: null};

  getID: any[];

 constructor(private service: CalculadoraService){

}


  ngOnInit() {
    this.service.getTodas().subscribe((operacao: Operacao[]) => {
      this.getID = operacao.map(operacao => operacao.id);
    });
    this.limparCampos();
  }

  public transferir(): void{

    if(this.listaOperacao.soma === 'soma') {
       const operacao: Operacao = { operacao: 'Soma', valor1: this.valor1, valor2: this.valor2, resultado: this.valorOperacao}
       this.service.adicionar(operacao).subscribe((resultado) =>{
        this.limparListaOperacao();
        this.limparCampos();
        location.reload();
       }, (error) => console.log(error));

       return;
      }

    if(this.listaOperacao.subtracao === 'subtracao') {
      const operacao: Operacao = { operacao: 'Subtração', valor1: this.valor1, valor2: this.valor2, resultado: this.valorOperacao}
      this.service.adicionar(operacao).subscribe((resultado) =>{
        this.limparListaOperacao();
        this.limparCampos();
        location.reload();
       }, (error) => console.log(error));
      return;
    }

    if(this.listaOperacao.multiplicacao === 'multiplicacao') {
      const operacao: Operacao = { operacao: 'Multiplicação', valor1: this.valor1, valor2: this.valor2, resultado: this.valorOperacao}
      this.service.adicionar(operacao).subscribe((resultado) =>{
        this.limparListaOperacao();
        this.limparCampos();
        location.reload();
       }, (error) => console.log(error));
      return;
    }

    if(this.listaOperacao.divisao === 'divisao') {
      const operacao: Operacao = { operacao: 'Divisão', valor1: this.valor1, valor2: this.valor2, resultado: this.valorOperacao}
      this.service.adicionar(operacao).subscribe((resultado) =>{
        this.limparListaOperacao();
        this.limparCampos();
        location.reload();
       }, (error) => console.log(error));
      return;
    }

  }

  public somar(): number {
    const soma = this.valor1 + this.valor2;
    this.listaOperacao.soma = 'soma';
    return this.valorOperacao = soma;
  }

  public subtrair(): number{
    const subtracao = this.valor1 - this.valor2;
    this.listaOperacao.subtracao = 'subtracao';
    return this.valorOperacao = subtracao;
  }

  public multiplicar(): number{
    const multiplicacao = (this.valor1) * (this.valor2);
    this.listaOperacao.multiplicacao = 'multiplicacao';
    return this.valorOperacao = multiplicacao;
  }

  public dividir(): number{
    const divisao = (this.valor1) / (this.valor2);
    this.listaOperacao.divisao = 'divisao';
    return this.valorOperacao = divisao;
  }

  public limparCampos(){
    this.valor1 = 0;
    this.valor2 = 0;
  }

  public limparListaOperacao (){
    this.listaOperacao.soma = null;
    this.listaOperacao.subtracao = null;
    this.listaOperacao.divisao = null;
    this.listaOperacao.multiplicacao = null;
  }

  public excluirOperacao(){

    this.getID.forEach( id => this.service.deletarResultado(id).subscribe());
    location.reload();
    window.alert("Você Limpou o Histórico");
  }

  public atualizarHistorico(){


  }

}
