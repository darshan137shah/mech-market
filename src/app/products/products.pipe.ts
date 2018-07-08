import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (args) ? value.filter(function(item) {
      if (item.productName.toLowerCase().indexOf(args.toLowerCase()) > -1) return true
    }): value;
  }
}
