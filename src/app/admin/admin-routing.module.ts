import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AnalyticsComponent} from './dashboards/analytics/analytics.component';
const routes: Routes = [
  {
    path:'',component:AdminComponent
  },
  {
    path:'ana',component:AnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
