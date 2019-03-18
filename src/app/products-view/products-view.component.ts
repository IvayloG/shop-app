import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  public categoryProductsData;

  constructor(private data: DataService) {
  }

  public ngOnInit(): void {
    //this.categoryProductsData = this.data.GetITProducts(); // this.data.getPromoProducts() .GetITProducts();
    this.categoryProductsData = this.data.getDummyData();
  }

  public showProductDetails() {
    // routing --> navigate to product component
  }
}

