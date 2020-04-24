import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {layoutComponent} from '../layout/layout.component';
import { UsersComponent } from './user/users.component';

const routes: Routes = [
  {
    path: '',
    component:layoutComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: { title: '管理用户信息', reuse: true },
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }