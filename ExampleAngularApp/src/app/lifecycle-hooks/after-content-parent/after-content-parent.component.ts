import { Component } from '@angular/core';


@Component({
  selector: 'after-content-parent',
  template: `
  <div class="parent">
    <h2>AfterContent</h2>

    <div *ngIf="show">` +
      `<after-content>
        <app-child></app-child>
        <app-child></app-child>
      </after-content>`
    + `</div>

    <div class="info">
      <h3>AfterContent Logs</h3>
      <button (click)="reset()">Reset</button>
    </div>
  </div>
  `,
  providers: []
})
export class AfterContentParentComponent {
  show = true;

  constructor() { }

  reset() {
    // this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    // this.logger.tick_then(() => this.show = true);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/