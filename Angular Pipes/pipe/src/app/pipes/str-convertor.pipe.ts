import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strConvertor',
  pure:true
})
export class StrConvertorPipe implements PipeTransform {

  transform(value: string, strType: string): string {
    var type=""
    if(strType=='toUpp')
      type=value.toUpperCase();
    else if(strType=='toLow')
      type=value.toLowerCase();
    else if(strType=='toCap'){
      var splitStr = value.toLowerCase().split(" ");
      /*for (var i = 0; i < splitStr.length; i++) {
        if (splitStr.length[i] < splitStr.length) {
          splitStr[i].charAt(0).toUpperCase();
        }
    
        value = splitStr.join(" ");
      }*/
      var finalStr="";
      for(var i in splitStr){
        finalStr=finalStr.concat(splitStr[i][0].toUpperCase().concat(splitStr[i].substr(1,splitStr[i].length)));
        finalStr=finalStr.concat(" ");
        //console.log(splitStr[1][0]);
      }
      //console.log(finalStr);
      //console.log(splitStr);
      //console.log(splitStr.length);
      type=finalStr;
    }
    return type;
  }

}
