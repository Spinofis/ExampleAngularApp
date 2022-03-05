import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  @Input() o;

  // store previous value of `id`
  id;

  constructor() {}

  // ngOnChanges() {
  //   // every time the object changes 
  //   // store the new `id`
  //   // this.id = this.o.id;
  // }

  // ngDoCheck() {
  //   // check for object mutation
  //   // if (this.id !== this.o.id) {
  //   //   this.cd.markForCheck();
  //   // }
  //   console.log('a do check')
  // }
}