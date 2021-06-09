import { Component } from '@angular/core';
import { CalculadoraServiceService } from './service/calculadora-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';

constructor(private service: CalculadoraServiceService){}

public transferencias($event){

  const transferencia = {...$event};

  this.service.adicionar(transferencia);

}
}
