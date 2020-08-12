import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfNavigationPlayerModule } from './../../../pdf-navigation-player/src/lib/pdf-navigation-player.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PdfNavigationPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
