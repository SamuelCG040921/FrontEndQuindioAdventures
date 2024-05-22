import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FeatureChaletsComponent } from '../feature-chalets/feature-chalets/feature-chalets.component';
import { FeatureHomeComponent } from '../feature-home/feature-home/feature-home.component';
import { FeaturePlanesVacacionalesComponent } from '../feature-planes-vacacionales/feature-planes-vacacionales/feature-planes-vacacionales.component';
import { FeatureReservesComponent } from './feature-reserves/feature-reserves.component';

const routes:Routes = [
  {path: '', component: FeatureHomeComponent, data: {title: 'Inicio'}},
  {path: 'chalets', component: FeatureChaletsComponent, data: {title: 'Chalets'}},
  {path: 'planes-vacacionales', component: FeaturePlanesVacacionalesComponent, data: {title: 'Planes vacacionales'}},
];



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeaturesReservesRoutingModule { }
