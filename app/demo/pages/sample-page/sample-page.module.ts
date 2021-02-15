import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { CodeComponent } from './code/code.component';
import { NgbTabsetModule, NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SamplePageComponent, CodeComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    NgbTabsetModule,
    NgbCollapseModule,
    NgbAccordionModule
  ]
})
export class SamplePageModule { }
