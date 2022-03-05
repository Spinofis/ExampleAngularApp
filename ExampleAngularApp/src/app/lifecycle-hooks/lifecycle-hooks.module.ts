import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { OnInitComponent } from './on-init/on-init.component';
import { OuterNgOnInitComponent } from './outer-ng-on-init/outer-ng-on-init.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { ChildComponent } from './child/child.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { FormsModule } from '@angular/forms';
import { DoCheckAppComponent } from './do-check-app/do-check-app.component';
import { AComponent } from './do-check-app/a/a.component';



@NgModule({
  declarations: [
    OnInitComponent,
    OuterNgOnInitComponent,
    AfterContentComponent,
    ChildComponent,
    AfterContentParentComponent,
    DoCheckAppComponent,
    AComponent
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule,
    FormsModule
  ]
})
export class LifecycleHooksModule { }
