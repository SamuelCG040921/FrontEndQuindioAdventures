import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureHomeComponent } from './features/feature-home/feature-home/feature-home.component';
import { FeatureReservesComponent } from './features/feature-reserves/feature-reserves/feature-reserves.component';
export const routes: Routes = [
  {path:'', component: FeatureHomeComponent},
  {path:'reserves', component: FeatureReservesComponent},
];



@NgModule({
  declarations:[
    FeatureReservesComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
