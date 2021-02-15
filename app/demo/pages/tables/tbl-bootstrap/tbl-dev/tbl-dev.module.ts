import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../../../../theme/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TblDevRoutingModule } from './tbl-dev-routing.module';
import { AllProblemsComponent } from './all-problems/all-problems.component';
import { OneProblemComponent } from './one-problem/one-problem.component';

@NgModule({
  declarations: [HomeComponent, AllProblemsComponent, OneProblemComponent],
  imports: [
    CommonModule,
    TblDevRoutingModule,
    SharedModule
  ]
})
export class TblDevModule { }
