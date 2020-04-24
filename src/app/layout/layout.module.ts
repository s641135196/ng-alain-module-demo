import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { layoutComponent } from './layout.component';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const COMPONENTS = [
    layoutComponent
  ];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
  ] ,
  exports: [
    ...COMPONENTS,
  ]
})
export class LayoutModule { }