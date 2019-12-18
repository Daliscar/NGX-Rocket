import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [fader]
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
