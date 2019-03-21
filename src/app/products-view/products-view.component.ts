import { DataService } from './../services/data.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { SliderType, IChangeCheckboxEventArgs } from 'igniteui-angular';
class PriceRange {
  constructor(
    public lower: number,
    public upper: number,
  ) {
  }
}

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

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  public categoryProductsData;
  public sliderType = SliderType;
  public priceRange: PriceRange;
  // public filters: Array<{ type: Array<string>}>;
  public filterGroups: any;
  public brands;
  public colors;
  public promotions;
  objectKeys = Object.keys;
  public userFilters = [];

  filterargs = ['Earth corp.', 'Mars corp.'];

  constructor(private data: DataService) {
  }

  public ngOnInit(): void {
    //this.categoryProductsData = this.data.GetITProducts(); // this.data.getPromoProducts() .GetITProducts();
    this.categoryProductsData = this.data.getDummyData();
    this.filterGroups = this.data.getFiltersForProductCategory('IT');

    // this.brands = this.data.getBrands();
    // this.colors = this.data.getColors();
    // this.promotions = this.data.getPromoProducts();

    // initialize - set slider default range
    this.priceRange = new PriceRange(200, 800);
  }

  public showProductDetails() {
    // routing --> navigate to product component
  }

  public onCheckboxChange(event: IChangeCheckboxEventArgs) {
    event.checked ? this.userFilters.push(event.checkbox.name) :
      this.userFilters = this.userFilters.filter(x => x !== event.checkbox.name);
    // update filters
  }


}

