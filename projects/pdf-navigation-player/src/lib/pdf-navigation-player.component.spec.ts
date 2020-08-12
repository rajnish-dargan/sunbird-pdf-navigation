import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfNavigationPlayerComponent } from './pdf-navigation-player.component';

describe('PdfNavigationPlayerComponent', () => {
  let component: PdfNavigationPlayerComponent;
  let fixture: ComponentFixture<PdfNavigationPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfNavigationPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfNavigationPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
