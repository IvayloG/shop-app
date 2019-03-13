import { Component, Pipe, PipeTransform } from '@angular/core';
import { Towns } from './towns-data';

@Component({
    selector: 'app-simple-autocomplete',
    templateUrl: './simple-autocomplete.component.html',
    styleUrls: ['./simple-autocomplete.component.scss']
})
export class SimpleAutocompleteComponent {
    public towns: any;
    public townSelected;

    constructor() {
        this.towns = Towns;
    }
}

@Pipe({ name: 'simpleAutocompleteStartsWith' })
export class SimpleAutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.trim().toLowerCase()));
    }
}
