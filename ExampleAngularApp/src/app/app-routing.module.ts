import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lifecycle-hooks',
    loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(m => m.LifecycleHooksModule)
  },
  {
    path: 'view-encapsulation',
    loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat-example1/chat-example1.module').then(m => m.ChatExample1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
