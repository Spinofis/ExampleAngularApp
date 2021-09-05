import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lifecycle-hooks',
    loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(m => m.LifecycleHooksModule)
  },
  {
    path:'view-encapsulation',
    loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
