import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkOrderComponent} from './work-order/work-order.component';
import { WorkOrderSearchComponent } from './work-order-search/work-order-search.component';
import {MenuService} from '@delon/theme';

const routes: Routes = [

   {path: 'work-order', component: WorkOrderComponent, data: { title: '工单首页', reuse: true }},
  {path: 'work-order-search/:id', component: WorkOrderSearchComponent,data: { title: '工单搜索', reuse: true }}
];

@NgModule({
  declarations: [
    WorkOrderComponent,
    WorkOrderSearchComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
