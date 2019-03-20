import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
  public objectKeys = Object.keys;
  public product;
  private sub: any;
  public id: number;
  public price = 300;
  public specs = {};
  specNames = [];
  specValues = [];
  reviews = [];

  constructor(private route: ActivatedRoute, private data: DataService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id'features to a number
      // In a real app: dispatch action to load the details here.


      // Get features for SPEC details
      const product = this.data.getProductByID(1);
      this.specs = product.features;
      Object.keys(this.specs).forEach(key => {
        this.specNames.push(key);
      });

      Object.keys(this.specs).forEach((key) => {
        this.specValues.push(this.specs[key]);
      });

      this.reviews = product.reviews;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

