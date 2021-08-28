import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.scss']
})
export class OnInitComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    alert('inside ngOnInit!');
  }

}
