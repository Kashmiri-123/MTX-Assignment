import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, tempType: string): number {
    var temp=0;
    if(tempType=='toCel')  
      temp=(value-32)/1.8;
    else  if(tempType=='toFar')
      temp=(value*1.8)+32;
    return temp;
  }

}
