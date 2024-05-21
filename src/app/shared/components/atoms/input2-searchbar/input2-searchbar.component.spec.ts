import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input2SearchbarComponent } from './input2-searchbar.component';

describe('Input2SearchbarComponent', () => {
  let component: Input2SearchbarComponent;
  let fixture: ComponentFixture<Input2SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input2SearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input2SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
