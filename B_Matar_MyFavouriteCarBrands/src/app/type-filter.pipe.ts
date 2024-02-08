import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter',
  standalone: true
})
export class TypeFilterPipe implements PipeTransform {

  transform(contents: Content[], type: string = ''): Content[] {
    if (!type) {
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === type);
  }

}
