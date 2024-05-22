import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesReservesRoutingModule } from './features-reserves-routing.module';
import { FeatureReservesComponent } from './feature-reserves/feature-reserves.component';
import { BrowserModule } from '@angular/platform-browser';
import { Input1SearchbarComponent } from '../../shared/components/atoms/input1-searchbar/input1-searchbar.component';
import { Input2SearchbarComponent } from '../../shared/components/atoms/input2-searchbar/input2-searchbar.component';
import { ButtonSearchbarComponent } from '../../shared/components/atoms/button-searchbar/button-searchbar.component';
import { ImgProfileComponent } from '../../shared/components/atoms/img-profile/img-profile.component';
import { ButtonProfileComponent } from '../../shared/components/atoms/button-profile/button-profile.component';
import { ANavComponent } from '../../shared/components/atoms/a-nav/a-nav.component';
import { LoginButtonComponent } from '../../shared/components/atoms/login-button/login-button.component';
import { FeatureHomeComponent } from '../feature-home/feature-home/feature-home.component';
import { FeatureChaletsComponent } from '../feature-chalets/feature-chalets/feature-chalets.component';
import { FeaturePlanesVacacionalesComponent } from '../feature-planes-vacacionales/feature-planes-vacacionales/feature-planes-vacacionales.component';

@NgModule({
  declarations: [
    FeatureReservesComponent,
    Input1SearchbarComponent,
    Input2SearchbarComponent,
    ButtonSearchbarComponent,
    ImgProfileComponent,
    ButtonProfileComponent,
    ANavComponent,
    LoginButtonComponent,
    FeatureHomeComponent,
    FeatureChaletsComponent,
    FeaturePlanesVacacionalesComponent

  ],
  imports: [
    CommonModule,
    FeaturesReservesRoutingModule,
    BrowserModule
  ]
})
export class FeatureReservesModule { }
