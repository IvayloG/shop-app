import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IgxLayoutModule, IgxRippleModule, IgxNavigationDrawerModule, IgxNavbarModule, IgxAutocompleteModule,
   IgxDropDownModule,
   IgxInputGroupModule, IgxButtonModule, IgxChipsModule, IgxTabsModule, IgxCardModule,
   IgxAvatarModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxCheckboxModule, IgxListModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule, ExternalAuthService } from './authentication';
import { SimpleAutocompleteComponent, SimpleAutocompletePipeStartsWith } from './simple-autocomplete/simple-autocomplete.component';
import { ChipComponent } from './chip/chip.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { BrandPipe, MyFlatPipe, ColorPipe, PromoPipe } from './utilities/commmon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleAutocompleteComponent,
    SimpleAutocompletePipeStartsWith,
    ChipComponent,
    TabsComponent,
    ProductsViewComponent,
    ProductDetailsComponent,
    BrandPipe,
    MyFlatPipe,
    PromoPipe,
    ColorPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    // NOTE: `AuthenticationModule` defines child routes, must be imported before root `AppRoutingModule`
    AuthenticationModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxChipsModule,
    IgxTabsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxIconModule,
    IgxSliderModule,
    IgxCheckboxModule,
    IgxListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private externalAuthService: ExternalAuthService) {
    /**
     * To register a social login, un-comment one or more of the following and add your service provider Client ID.
     * See https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template#add-a-third-party-social-provider
     */
    // this.externalAuthService.addGoogle('<CLIENT_ID>');

    // this.externalAuthService.addMicrosoft('<CLIENT_ID>');

    // this.externalAuthService.addFacebook('<CLIENT_ID>');
  }
}
