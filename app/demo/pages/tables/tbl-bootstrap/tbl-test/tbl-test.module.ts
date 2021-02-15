import { SharedModule } from './../../../../../theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblTestRoutingModule } from './tbl-test-routing.module';
import { HomeComponent } from './home/home.component';
import { TestenvirComponent } from './testenvir/testenvir.component';
import { OneRequirmentComponent } from './one-requirment/one-requirment.component';
import { TestDialogComponent, FormatTimePipe } from './test-dialog/test-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    TestenvirComponent,
    OneRequirmentComponent,
    TestDialogComponent,
    FormatTimePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    /* UiBasicModule, */
    TblTestRoutingModule
  ],
  entryComponents:[
    TestDialogComponent
  ]
})
export class TblTestModule { }
