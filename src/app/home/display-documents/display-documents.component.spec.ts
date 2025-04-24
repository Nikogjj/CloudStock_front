import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDocumentsComponent } from './display-documents.component';

describe('DisplayDocumentsComponent', () => {
  let component: DisplayDocumentsComponent;
  let fixture: ComponentFixture<DisplayDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
