import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bt-basic',
        loadChildren: () => import('./tbl-basic/tbl-basic.module').then(module => module.TblBasicModule)
      },
      {
        path: 'bt-dev',
        loadChildren: () => import('./tbl-dev/tbl-dev.module').then(module => module.TblDevModule)
      },
      {
        path: 'bt-test',
        loadChildren: () => import('./tbl-test/tbl-test.module').then(module => module.TblTestModule)
      },
      {
        path: 'bt-border',
        loadChildren: () => import('./tbl-border/tbl-border.module').then(module => module.TblBorderModule)
      },
      {
        path: 'bt-sizing',
        loadChildren: () => import('./tbl-sizing/tbl-sizing.module').then(module => module.TblSizingModule)
      },
      {
        path: 'bt-styling',
        loadChildren: () => import('./tbl-styling/tbl-styling.module').then(module => module.TblStylingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblBootstrapRoutingModule { }
