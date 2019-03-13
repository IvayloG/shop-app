import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { SimpleAutocompleteComponent } from './simple-autocomplete/simple-autocomplete.component';
import { ChipComponent } from './chip/chip.component';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'simple-autocomplete', component: SimpleAutocompleteComponent, data: { text: 'Simple Autocomplete' } },
  { path: 'chip', component: ChipComponent, data: { text: 'Chip' } },
  { path: 'tabs', component: TabsComponent, data: { text: 'Tabs' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
