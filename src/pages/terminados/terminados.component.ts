import { Component } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html'
})
export class TerminadosComponent {
  
  constructor(private _listaDeseos:ListaDeseosService, private navCtrl:NavController) {
  }

  verDetalle(lista:any[], i:number){
    this.navCtrl.push(DetalleComponent, { lista, i });
  }
}
