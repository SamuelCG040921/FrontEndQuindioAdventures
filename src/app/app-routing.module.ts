import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureReservesComponent } from './features/feature-reserves/feature-reserves/feature-reserves.component';
export const routes: Routes = [
  {path:'reserves', component: FeatureReservesComponent}
];



@NgModule({
  declarations:[
    FeatureReservesComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
