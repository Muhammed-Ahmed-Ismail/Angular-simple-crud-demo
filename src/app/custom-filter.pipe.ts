import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(data: string[],needle:string): string[] {
    return data.filter(dataItem=>{
      return dataItem.includes(needle)
    });
  }

}
