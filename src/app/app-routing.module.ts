import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { WorkOrderSearchComponent } from './work-order-search/work-order-search.component';
import {MenuService} from '@delon/theme';

const routes: Routes = [
  {path: 'admin',  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'work-order',  loadChildren: () => import('./work-order/work-order.module').then(m => m.WorkOrderModule)},
  {path: 'work-order-search/:id', component: WorkOrderSearchComponent,data: { title: '工单搜索', reuse: true }}
];

@NgModule({
  declarations: [
    WorkOrderSearchComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
