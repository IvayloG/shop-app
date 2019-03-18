import { filter } from 'rxjs/operators';
import { DataService } from './../services/data.service';
import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { AutocompleteItemSelectionEventArgs } from 'igniteui-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-simple-autocomplete',
    templateUrl: './simple-autocomplete.component.html',
    styleUrls: ['./simple-autocomplete.component.scss']
})
export class SimpleAutocompleteComponent implements OnInit{
    public products: any;
    public productSelected;

    constructor(
      public data: DataService,
      private  router: Router,
      private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.products = this.data.dummyProducts.map(product => product.productName);
    }

    public handleProductSelected(event: AutocompleteItemSelectionEventArgs) {
      const selectedProduct = this.data.getFilteredProduct(event.value)[0].productName;
      const filteredProdCategory = this.data.getFilteredProductCategory(event.value);

  // this.router.navigate([filteredProdCategory, selectedProduct]); // ../IT/smartwatch1
   // this.router.navigate([filteredProdCategory, selectedProduct], {relativeTo: this.route} ); // home/IT/smartwatch1
    }
}

@Pipe({ name: 'simpleAutocompleteStartsWith' })
export class SimpleAutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.trim().toLowerCase()));
    }
}
