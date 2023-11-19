import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    LandingPageComponent,
    HeroSectionComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
