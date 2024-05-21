import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/atoms/logo/logo.component';
import { Input1SearchbarComponent } from './shared/components/atoms/input1-searchbar/input1-searchbar.component';
import { Input2SearchbarComponent } from './shared/components/atoms/input2-searchbar/input2-searchbar.component';
import { ButtonSearchbarComponent } from './shared/components/atoms/button-searchbar/button-searchbar.component';
import { ImgProfileComponent } from './shared/components/atoms/img-profile/img-profile.component';
import { ButtonProfileComponent } from './shared/components/atoms/button-profile/button-profile.component';
import { ANavComponent } from './shared/components/atoms/a-nav/a-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    Input1SearchbarComponent,
    Input2SearchbarComponent,
    ButtonSearchbarComponent,
    ImgProfileComponent,
    ButtonProfileComponent,
    ANavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
