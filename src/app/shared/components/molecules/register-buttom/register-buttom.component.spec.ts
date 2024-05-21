import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterButtomComponent } from './register-buttom.component';

describe('RegisterButtomComponent', () => {
  let component: RegisterButtomComponent;
  let fixture: ComponentFixture<RegisterButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterButtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
