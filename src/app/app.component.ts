import { DataService } from './services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

import {
  IgxNavigationDrawerComponent, ButtonGroupAlignment, IButtonGroupEventArgs,
  IgxButtonGroupComponent
} from 'igniteui-angular';
interface IButton {
  ripple?: string;
  label?: string;
  disabled?: boolean;
  togglable?: boolean;
  selected?: boolean;
  color?: string;
  icon?: string;
}


class Button {
  private ripple: string;
  private label: string;
  private disabled: boolean;
  private togglable: boolean;
  private selected: boolean;
  private color: string;
  private icon: string;

  constructor(obj?: IButton) {
    this.ripple = obj.ripple || 'gray';
    this.label = obj.label;
    this.selected = obj.selected || false;
    this.togglable = obj.togglable;
    this.disabled = obj.disabled || false;
    this.color = obj.color;
    this.icon = obj.icon;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public alignment = ButtonGroupAlignment.horizontal;
  public categories;

  public data: {
    category: {
      name: string,
      subcategory: {
        name: string,
        products: {
          productName: string,
          productSKU: string,
          color: string
        }[]
      }[]
    }[]
  }[] = [];


  public topNavLinks: Array<{
    path: string,
    name: string
  }> = [];
  @ViewChild(IgxNavigationDrawerComponent) public navdrawer: IgxNavigationDrawerComponent;
  @ViewChild('ButtonGroup')
  private buttonGroup: IgxButtonGroupComponent;


  constructor(public router: Router, private shopData: DataService) {
    // for (const route of routes) {
    //   if (route.path && route.data && route.path.indexOf('*') === -1) {
    //     this.topNavLinks.push({
    //       name: route.data.text,
    //       path: '/' + route.path
    //     });
    //   }
    // }
  }

  public ngOnInit(): void {
    this.data = this.shopData.data;

    // this.router.events.pipe(
    //   filter((x) => x instanceof NavigationStart)
    // )
    //   .subscribe((event: NavigationStart) => {
    //       if (event.url !== '/' && !this.navdrawer.pin) {
    //           // Close drawer when selecting a view on mobile (unpinned)
    //           this.navdrawer.close();
    //       }
    //   });


    this.categories = [
      new Button({
        label: this.data[0].category[0].name
      }),
      new Button({
        label: this.data[0].category[1].name
      })
      // ,
      // new Button({
      //     label: 'PHOTO & VIDEO',
      //     selected: true
      // }),
      // new Button({
      //     label: 'IT'
      // })
    ];

  }

  public onCategorySelected(event: IButtonGroupEventArgs) {
    // event.button
    const selectedButton = this.buttonGroup.selectedButtons; // routerLink="{{route.path}}"
  }

  public onBtnGroupClick(event: MouseEvent) {
    // event.srcElement.textContent    =='IT'  //pass to data service?
    // this.filters = this.shopData.getFiltersForProductCategory(event.srcElement.textContent);
    this.router.navigateByUrl(event.srcElement.textContent);
    //this.router.navigateByUrl('IT');
  }
}
