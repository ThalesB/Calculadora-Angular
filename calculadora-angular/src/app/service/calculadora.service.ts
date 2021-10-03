import { CalculadoraComponent } from './../calculadora/calculadora.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operacao } from '../model/operacao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/operacoes';

  constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
 }


getTodas(): Observable<Operacao[]> {

  return this.httpClient.get<Operacao[]>(this.url);

 }

 adicionar(operacao: Operacao): Observable<Operacao> {

  return this.httpClient.post<Operacao>(this.url, operacao);
 }

 deletarResultado(id: any): Observable<Operacao> {

   return this.httpClient.delete<Operacao>(`http://localhost:3000/operacoes/${id}`);
 }

}
