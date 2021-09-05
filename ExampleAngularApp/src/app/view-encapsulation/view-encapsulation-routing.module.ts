import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {EncapsulationModesComponent} from  './encapsulation-modes/encapsulation-modes.component';

const routes : Routes=[
  {
    path:'',
    component:EncapsulationModesComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEncapsulationRoutingModule { }
