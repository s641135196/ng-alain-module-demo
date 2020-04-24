import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomInfoComponent } from './custom-info/custom-info.component';
import {layoutComponent} from '../layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component:layoutComponent,
    children: [
    {
      path: 'custom-info',
      component: CustomInfoComponent,
      data: { title: '客户列表', reuse: true },
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderRoutingModule { }