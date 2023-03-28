import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  /* i18n */
  nombre: string = 'Martin';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarPersona() {
    if (this.genero === 'masculino') {
      this.nombre = 'Leti';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Martin';
      this.genero = 'masculino';
    }
  }

  /* i18nPlurar */
  clientes: any[] = ['Maria', 'Pedro', 'Juan', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  borrarCliente() {
    if (this.clientes.length !== 0) {
      this.clientes.pop();
      console.log(this.clientes);
    }
  }

  /* KeyValue Pipe */
  persona = {
    nombre: 'Martin',
    age: 22,
    direccion: 'En casa',
  };

  heroe = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'robin',
      vuela: false,
    },
    {
      nombre: 'Agucaman',
      vuela: false,
    },
  ];

  miObservable = interval(5000); /* 0,1,2,3,4,5,6,7,8 */
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}
