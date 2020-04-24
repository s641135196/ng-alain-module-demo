import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomInfoComponent } from './custom-info/custom-info.component';


const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'custom-info',
      component: CustomInfoComponent,
      data: { title: '用户信息', reuse: true },
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderRoutingModule { }