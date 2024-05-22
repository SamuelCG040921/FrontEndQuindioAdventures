import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePlanesVacacionalesComponent } from './feature-planes-vacacionales.component';

describe('FeaturePlanesVacacionalesComponent', () => {
  let component: FeaturePlanesVacacionalesComponent;
  let fixture: ComponentFixture<FeaturePlanesVacacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturePlanesVacacionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturePlanesVacacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
