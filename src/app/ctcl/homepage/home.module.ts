/* tslint:disable */
import { NgModule } from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AngularEchartsModule} from "ngx-echarts";
import {HomeComponent} from "./home.component";


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    CarouselModule,    
    AccordionModule,
    PanelModule,
  ],
  
  declarations: [
    HomeComponent,
    LatestMatchesComponent,    
  ],
   providers: [
   HomePageService,  

  ]
})
})
export class HomeModule { }
