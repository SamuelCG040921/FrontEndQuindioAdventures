import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesReservesRoutingModule } from './features-reserves-routing.module';
import { FeatureReservesComponent } from './feature-reserves/feature-reserves.component';

@NgModule({
  declarations: [
    FeatureReservesComponent
  ],
  imports: [
    CommonModule,
    FeaturesReservesRoutingModule
  ]
})
export class FeatureReservesModule { }
