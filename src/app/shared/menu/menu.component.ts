import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipe de Angular',
        icon: 'pi pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/numeros',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: '/no-comunes',
          },
        ],
      },
      {
        label: 'Pipe Personalizados',
        icon: 'pi pi-cog',
        routerLink: '/ordenar',
      },
    ];
  }
}
