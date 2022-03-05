import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersRoutingModule } from './others-routing.module';
import { OtherComponent } from './other/other.component';



@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
