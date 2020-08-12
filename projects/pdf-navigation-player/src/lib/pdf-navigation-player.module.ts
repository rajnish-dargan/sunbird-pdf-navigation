import { NgModule } from '@angular/core';
import { PdfNavigationPlayerComponent } from './pdf-navigation-player.component';
import { PdfNavigationCtrlComponent } from './pdf-navigation-ctrl/pdf-navigation-ctrl.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PdfNavigationPlayerComponent, PdfNavigationCtrlComponent],
  imports: [
    FormsModule
  ],
  exports: [PdfNavigationPlayerComponent, PdfNavigationCtrlComponent]
})
export class PdfNavigationPlayerModule { }
