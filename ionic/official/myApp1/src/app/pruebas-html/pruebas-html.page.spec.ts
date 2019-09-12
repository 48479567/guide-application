import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasHtmlPage } from './pruebas-html.page';

describe('PruebasHtmlPage', () => {
  let component: PruebasHtmlPage;
  let fixture: ComponentFixture<PruebasHtmlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasHtmlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasHtmlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
