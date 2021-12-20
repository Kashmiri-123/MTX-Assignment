import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strSlicer'
})
export class StrSlicerPipe implements PipeTransform {

  transform(value: string, start:number, end:number): string {
    var fintext="";
    if (start >= 0) {
      if (end < 0)
        end = value.length + end;
      else
        end += 1;
      fintext = value.substring(start, end);
    }
    else{
      alert("startPosition can't be negative or null");
    }

    return fintext;
  }

}
