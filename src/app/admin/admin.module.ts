import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AppRoutingModule} from '../app-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { UsersComponent } from './user/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ] 
})
export class AdminModule { }