import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoutFoundComponent } from './page-nout-found.component';

describe('PageNoutFoundComponent', () => {
  let component: PageNoutFoundComponent;
  let fixture: ComponentFixture<PageNoutFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNoutFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNoutFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
