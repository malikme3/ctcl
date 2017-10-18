/* tslint:disable */
import { NgModule } from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AngularEchartsModule} from "ngx-echarts";
import {HomeComponent} from "./home.component";


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
