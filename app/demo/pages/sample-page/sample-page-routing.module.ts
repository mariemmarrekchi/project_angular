import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SamplePageComponent} from './sample-page.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePageComponent
  },
  {
    path:'environment',
    component:CodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule { }
