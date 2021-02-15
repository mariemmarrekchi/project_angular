import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllProblemsComponent } from './all-problems/all-problems.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'environment',
    component:AllProblemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblDevRoutingModule { }
