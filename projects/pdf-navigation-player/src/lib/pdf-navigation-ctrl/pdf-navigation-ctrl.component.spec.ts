import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfNavigationCtrlComponent } from './pdf-navigation-ctrl.component';

describe('PdfNavigationCtrlComponent', () => {
  let component: PdfNavigationCtrlComponent;
  let fixture: ComponentFixture<PdfNavigationCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfNavigationCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfNavigationCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
