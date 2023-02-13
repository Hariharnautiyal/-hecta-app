import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import { DealsComponent } from './deals/deals.component';
import {CsComponent} from 'src/app/cs/cs.component';
import { CodeComponent } from './deals/code/code.component';
import { WelcomeComponent } from './deals/welcome/welcome.component';
import {FilesComponent} from './deals/files/files.component';
import { ChannelComponent } from './deals/channel/channel.component';
import { DownloadComponent } from './deals/download/download.component';
import { ProductComponent } from './deals/product/product.component';
const routes: Routes = [
  {
path:'',redirectTo:'cs',pathMatch:'full'
  },
  {
    path: 'admin',
    component:AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'deals',
    component:DealsComponent,
    children: [
      {
    path:"",redirectTo:"code",pathMatch:'full'
      },
    {
      path:'code',component:CodeComponent
    },
    {
      path:'welcome',component:WelcomeComponent
    },
    {
      path:'files',component:FilesComponent
    },
    {
      path:'channel',component:ChannelComponent
    },
    {
      path:'download',component:DownloadComponent
    },
    {
      path:'product',component:ProductComponent
    }
    ]
  },
  {
  path:'cs',component:CsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
