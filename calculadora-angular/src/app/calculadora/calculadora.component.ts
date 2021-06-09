import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  @Output() aoTransferir = new EventEmitter<any>();

  public valor1: number;
  public valor2: number;

  public valorOperacao: number;

  public listaOperacao = {soma:null, subtracao: null, multiplicacao: null, divisao: null}


  ngOnInit() {
  }

  public transferir(): void{

    if(this.listaOperacao.soma === 'soma'){
       const operacao = {valor1: this.valor1, valor2: this.valor2, operacao: 'Soma', resultado: this.valorOperacao}
       this.aoTransferir.emit(operacao);
       this.limparListaOperacao();
       this.limparCampos();
       return;
      }

    if(this.listaOperacao.subtracao === 'subtracao'){
      const operacao = {valor1: this.valor1, valor2: this.valor2, operacao: 'Subtração', resultado: this.valorOperacao}
       this.aoTransferir.emit(operacao);
      this.limparListaOperacao();
      this.limparCampos();
      return;
    }

    if(this.listaOperacao.multiplicacao === 'multiplicacao'){
      const operacao = {valor1: this.valor1, valor2: this.valor2, operacao: 'Multiplicação', resultado: this.valorOperacao}
      this.aoTransferir.emit(operacao);
      this.limparListaOperacao();
      this.limparCampos();
      return;
    }

    if(this.listaOperacao.divisao === 'divisao'){
      const operacao = {valor1: this.valor1, valor2: this.valor2, operacao: 'Divisão', resultado: this.valorOperacao}
      this.aoTransferir.emit(operacao);
      this.limparListaOperacao();
      this.limparCampos();
      return;
    }

  }

  public somar(): number{
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
}
