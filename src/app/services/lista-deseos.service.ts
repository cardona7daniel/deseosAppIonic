import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {
  listas:Lista[] = [];

  constructor() {

    console.log("Servicio inicializado");

    // let lista1 = new Lista('Compras de Supermercado');
    // let lista2 = new Lista('Juegos que Deseo');
    // let lista3 = new Lista('Cosas de la Universidad');

    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    this.cargarData();

  }

  actulizarData() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){
    if(localStorage.getItem("data"))
      this.listas = JSON.parse(localStorage.getItem("data"));
  }

  agregarLista(lista:Lista) {
    this.listas.push(lista);
    this.actulizarData();
  }

  eliminarLista(idx:number) {
    this.listas.splice(idx, 1);
    this.actulizarData();
  }
}