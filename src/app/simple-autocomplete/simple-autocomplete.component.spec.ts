import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleAutocompleteComponent, SimpleAutocompletePipeStartsWith } from './simple-autocomplete.component';
import { IgxDropDownModule, IgxAutocompleteModule, IgxInputGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

describe('SimpleAutocompleteComponent', () => {
    let component: SimpleAutocompleteComponent;
    let fixture: ComponentFixture<SimpleAutocompleteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleAutocompleteComponent, SimpleAutocompletePipeStartsWith],
            imports: [FormsModule, IgxDropDownModule, IgxAutocompleteModule, NoopAnimationsModule, IgxInputGroupModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
