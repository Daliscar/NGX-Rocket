import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Page3Component } from './page3.component';

const routes: Routes = [
  { path: '', component: Page3Component, data: { title: extract('Page3') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page3RoutingModule {}
