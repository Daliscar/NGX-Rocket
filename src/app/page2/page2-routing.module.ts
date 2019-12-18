import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Page2Component } from './page2.component';

const routes: Routes = [
  { path: '', component: Page2Component, data: { title: extract('Page2') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule {}
