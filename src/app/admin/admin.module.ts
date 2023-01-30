import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnalyticsComponent } from './dashboards/analytics/analytics.component';
import { RnModalComponent } from './rn-modal/rn-modal.component';
import { CustomiserComponent } from './customiser/customiser.component';
import { FooterComponent } from './footer/footer.component';
import {NgApexchartsModule} from 'ng-apexcharts';
@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    MenuComponent,
    SidebarComponent,
    AnalyticsComponent,
    RnModalComponent,
    CustomiserComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgApexchartsModule
  ]
})
export class AdminModule { }
