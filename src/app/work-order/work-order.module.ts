import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderRoutingModule } from './work-order-routing.module';
import { CustonInfoComponent } from './custon-info/custon-info.component';

@NgModule({
  declarations: [CustonInfoComponent],
  imports: [
    CommonModule,
    WorkOrderRoutingModule,
  ]
})
export class WorkOrderModule { }