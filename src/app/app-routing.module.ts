import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: './about/about.module#AboutModule',
      data: { animation: 'isLeft' }
    }
  ]),

  Shell.childRoutes([
    {
      path: 'page1',
      loadChildren: './page1/page1.module#Page1Module',
      data: { animation: 'isLeft' }
    }
  ]),

  Shell.childRoutes([
    {
      path: 'page2',
      loadChildren: './page2/page2.module#Page2Module',
      data: { animation: 'isLeft' }
    }
  ]),

  Shell.childRoutes([
    {
      path: 'page3',
      loadChildren: './page3/page3.module#Page3Module',
      data: { animation: 'isLeft' }
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
