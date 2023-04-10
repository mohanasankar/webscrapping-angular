import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlscrappingComponent } from './urlscrapping.component';

describe('UrlscrappingComponent', () => {
  let component: UrlscrappingComponent;
  let fixture: ComponentFixture<UrlscrappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlscrappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlscrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
