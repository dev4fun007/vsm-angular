import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tileData'})
export class TileDataPipe implements PipeTransform {
  transform(value: object): object {
    let valuesArr = Object.values(value);
    value['heading1'] = valuesArr[0];
    value['heading2'] = valuesArr[1];
    return value;
  }
}