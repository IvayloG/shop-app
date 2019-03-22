import { ProductDetailsComponent } from './product/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { SimpleAutocompleteComponent } from './simple-autocomplete/simple-autocomplete.component';
import { TabsComponent } from './tabs/tabs.component';

import { ProductsViewComponent } from './products-view/products-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },

  // { path: 'IT', component: ProductsViewComponent }, //TODO pass selectedProduct to ProductsViewComponent

  {
    path: 'IT',
    children: [
      { path: '', component: ProductsViewComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  },
  { path: 'simple-autocomplete', component: SimpleAutocompleteComponent, data: { text: 'Simple Autocomplete' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
