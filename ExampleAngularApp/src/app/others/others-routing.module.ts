import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { OtherComponent } from './other/other.component';

export const routes: Routes = [
    {
        path: '',
        component: OtherComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OthersRoutingModule {

}