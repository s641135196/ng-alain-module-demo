import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from  './user/user.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: { title: '用户信息管理', reuse: true },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule { }