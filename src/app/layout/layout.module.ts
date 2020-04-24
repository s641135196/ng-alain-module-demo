import { NgModule } from '@angular/core';
import { layoutComponent } from './layout.component';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const COMPONENTS = [
    layoutComponent
  ];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
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