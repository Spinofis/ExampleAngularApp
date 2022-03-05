import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-app',
  templateUrl: './do-check-app.component.html',
  styleUrls: ['./do-check-app.component.scss']
})
export class DoCheckAppComponent implements OnInit {

  // name = `Angular! v${VERSION.full}`;
  o = {id: 1, name: 'John'};

  ngOnInit() {
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 2000);
  }

}
