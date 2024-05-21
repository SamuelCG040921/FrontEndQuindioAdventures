import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FeatureReservesComponent } from './feature-reserves/feature-reserves.component';

const routes:Routes = [
  {path: '', component: FeatureReservesComponent}
];



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesReservesRoutingModule { }
