import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter',
  pure: false
})
export class BrandPipe implements PipeTransform {
  transform(products: any[], filter: any[]): any {
    if (!products || !filter || !filter.length) {
      return products;
    }
    return products.filter(product => filter.indexOf(product.brand) > -1);
  }
}

@Pipe({
  name: 'colorFilter',
  pure: false
})
export class ColorPipe implements PipeTransform {
  transform(products: any[], filter: any[]): any {
    if (!products || !filter || !filter.length) {
      return products;
    }
    return products.filter(product => filter.indexOf(product.color) > -1);
  }
}

@Pipe({
  name: 'promoFilter',
  pure: false
})
export class PromoPipe implements PipeTransform {
  transform(products: any[], filter: any[]): any {
    if (!products || !filter || !filter.length) {
      return products;
    }
    return products.filter(product => filter.indexOf(product.promotion) > -1);
  }
}

@Pipe({
  name: 'flatFilter',
  pure: false
})
export class MyFlatPipe implements PipeTransform {
  transform(products: any[]): any {
    if (!products) {
      return [];
    }
    return products.map(entry => {
      const newProducts = Object.assign({}, entry);
      entry.filters.forEach(element => {
        Object.assign(newProducts, element);
      });
      return newProducts;
    });
  }
}
