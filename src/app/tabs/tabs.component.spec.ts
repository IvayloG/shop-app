import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
import { IgxTabsModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsComponent],
      imports: [ IgxTabsModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
