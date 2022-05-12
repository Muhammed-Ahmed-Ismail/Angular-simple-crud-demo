import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashReplacer'
})
export class DashReplacerPipe implements PipeTransform {

  transform(slug: string): string {

    return slug.replace('-',' ');
  }

}
