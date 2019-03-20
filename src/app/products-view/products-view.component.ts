import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SliderType } from 'igniteui-angular';
class PriceRange {
  constructor(
    public lower: number,
    public upper: number,
  ) {
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
}

