import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { SliderType, IChangeCheckboxEventArgs } from 'igniteui-angular';
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
  public userFilters = [];

  brandFilterArgs = [];
  colorFilterArgs = [];
  promoFilterArgs = [];

  constructor(private data: DataService) {
  }

  public ngOnInit(): void {
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

  // update filters
  public onCheckboxChange(event: IChangeCheckboxEventArgs) {
    if (event.checked) {
      // TODO: remove temp patch
      switch (event.checkbox.name) {
        case 'Earth corp.':
        case 'Mars corp.':
        case 'Great corp.':
          this.brandFilterArgs.push(event.checkbox.name);
          break;
        case 'black':
        case 'white':
          this.colorFilterArgs.push(event.checkbox.name);
          break;
        case 'Hot Sale':
        case 'Limited':
        case 'Today\'s offer':
          this.promoFilterArgs.push(event.checkbox.name);
          break;
        default:
          break;
      }
    } else {
      switch (event.checkbox.name) {
        case 'Earth corp.':
        case 'Mars corp.':
        case 'Great corp.':
          const index = this.brandFilterArgs.indexOf(event.checkbox.name, 0);
          if (index > -1) {
            this.brandFilterArgs.splice(index, 1);
          }
          break;
        case 'black':
        case 'white':
          const i = this.brandFilterArgs.indexOf(event.checkbox.name, 0);
          if (i > -1) {
            this.brandFilterArgs.splice(i, 1);
          }
          break;
        case 'Hot Sale':
        case 'Limited':
        case 'Today\'s offer':
          const indx = this.brandFilterArgs.indexOf(event.checkbox.name, 0);
          if (indx > -1) {
            this.brandFilterArgs.splice(indx, 1);
          }
          break;
        default:
          break;
      }
    }
  }
}

