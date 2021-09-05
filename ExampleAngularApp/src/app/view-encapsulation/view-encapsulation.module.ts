import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncapsulationModesComponent } from './encapsulation-modes/encapsulation-modes.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';


@NgModule({
  declarations:
    [
      EncapsulationModesComponent,
      NoEncapsulationComponent,
      EmulatedEncapsulationComponent,
      ShadowDomEncapsulationComponent
    ],
  imports: [
    CommonModule,
    ViewEncapsulationRoutingModule
  ]
})
export class ViewEncapsulationModule { }
