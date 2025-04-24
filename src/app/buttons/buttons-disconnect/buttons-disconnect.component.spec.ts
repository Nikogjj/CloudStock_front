import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDisconnectComponent } from './buttons-disconnect.component';

describe('ButtonsDisconnectComponent', () => {
  let component: ButtonsDisconnectComponent;
  let fixture: ComponentFixture<ButtonsDisconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsDisconnectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsDisconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
