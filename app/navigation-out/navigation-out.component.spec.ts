import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOutComponent } from './navigation-out.component';

describe('NavigationOutComponent', () => {
  let component: NavigationOutComponent;
  let fixture: ComponentFixture<NavigationOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
