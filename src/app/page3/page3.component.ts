import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { fader } from '../route-animations';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
  animations: [fader]
})
export class Page3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
