import { Component } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {

  i: number;
  lista: Lista;

  constructor(private _listaDeseos: ListaDeseosService, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController) {

    this.i = this.navParams.get("i");
    this.lista = this.navParams.get("lista");
  }

  actualizar(item: ListaItem) {

    item.completado = !item.completado;
    
    let todosMarcados = true;
    for(let item of this.lista.items){
      if (!item.completado){
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actulizarData();

  }

  borrarItem() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Está seguro de querer eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.i);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
