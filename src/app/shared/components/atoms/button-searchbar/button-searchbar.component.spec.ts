import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSearchbarComponent } from './button-searchbar.component';

describe('ButtonSearchbarComponent', () => {
  let component: ButtonSearchbarComponent;
  let fixture: ComponentFixture<ButtonSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
