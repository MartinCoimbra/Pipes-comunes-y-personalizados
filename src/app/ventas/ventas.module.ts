import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicosComponent } from './page/basicos/basicos.component';
import { NoComunesComponent } from './page/no-comunes/no-comunes.component';
import { NumerosComponent } from './page/numeros/numeros.component';
import { OrdenarComponent } from './page/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { ColorPipe, VuelaPipe } from './pipes/table.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class VentasModule {}
