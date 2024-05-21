import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input1SearchbarComponent } from './input1-searchbar.component';

describe('Input1SearchbarComponent', () => {
  let component: Input1SearchbarComponent;
  let fixture: ComponentFixture<Input1SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input1SearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input1SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
