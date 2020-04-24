import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderRoutingModule } from './work-order.routing.module';
import { CustomInfoComponent } from './custom-info/custom-info.component';

@NgModule({
  declarations: [CustomInfoComponent],
  imports: [
    CommonModule,
    WorkOrderRoutingModule,
  ]
})
export class WorkOrderModule { }