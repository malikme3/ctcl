/* tslint:disable */
import { NgModule } from '@angular/core';
import {AngularEchartsModule} from "ngx-echarts";


@NgModule({
  imports: [
    ThemeModule,
   AngularEchartsModule,
  ],
  declarations: [
    ServicesComponent,
  ],
})
export class ServicesModule { }
