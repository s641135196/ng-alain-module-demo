import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderRoutingModule } from './work-order.routing.module';
import { CustomInfoComponent } from './custom-info/custom-info.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [CustomInfoComponent],
  imports: [
    CommonModule,
    WorkOrderRoutingModule,
    LayoutModule 
  ]
})
export class WorkOrderModule { }