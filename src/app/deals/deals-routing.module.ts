import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FilesComponent} from './files/files.component';
const routes: Routes = [
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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }
