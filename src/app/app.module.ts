import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AlainThemeModule} from '@delon/theme';
import {DelonABCModule, ReuseTabService, ReuseTabStrategy} from '@delon/abc';
import {DelonChartModule} from '@delon/chart';
import {DelonACLModule} from '@delon/acl';
import {DelonCacheModule} from '@delon/cache';
import {DelonUtilModule} from '@delon/util';
import {DelonAuthModule} from '@delon/auth';
import {DelonFormModule} from '@delon/form';
import {RouteReuseStrategy} from '@angular/router';


const REUSETAB_PROVIDES = [
  {
    provide: RouteReuseStrategy,
    useClass: ReuseTabStrategy,
    deps: [ReuseTabService],
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    AlainThemeModule.forRoot(),
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonCacheModule,
    DelonUtilModule,
    DelonAuthModule,
    DelonFormModule.forRoot(),
  ],
  providers: [...REUSETAB_PROVIDES],
  bootstrap: [AppComponent]
})
export class AppModule {

}
