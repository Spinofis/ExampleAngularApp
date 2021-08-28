import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OuterNgOnInitComponent } from "./outer-ng-on-init/outer-ng-on-init.component";

import { OnInitComponent } from "./on-init/on-init.component";
import { AfterContentParentComponent } from "./after-content-parent/after-content-parent.component";

const routes: Routes = [
    {
        component: OuterNgOnInitComponent,
        path: 'on-init'
    },
    {
        component: AfterContentParentComponent,
        path: 'after-content'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LifecycleHooksRoutingModule {

}