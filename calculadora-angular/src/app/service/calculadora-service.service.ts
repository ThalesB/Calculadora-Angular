import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraServiceService {

  private listaTransferencia: any[];

  constructor() {
  this.listaTransferencia = [];
 }

  adicionar(transferencia: any){
   this.listaTransferencia.push(transferencia);
 }

 get transferencias() {
   return this.listaTransferencia;
 }

}
