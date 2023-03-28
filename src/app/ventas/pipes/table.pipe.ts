import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({ name: 'vuela' })
export class VuelaPipe implements PipeTransform {
  transform(vuela: boolean): string {
    return vuela ? 'Vuela' : 'No vuela';
  }
}

@Pipe({ name: 'color' })
export class ColorPipe implements PipeTransform {
  transform(color: number): string {
    console.log(Color[color])
    return Color[color];
  }
}
