import { Injectable } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {FilesMbsComponent} from 'src/app/mbs/files-mbs/files-mbs.component';
import {Router} from '@angular/router';
import { PcFilesComponent } from '../mbs/pc-files/pc-files.component';
@Injectable({
  providedIn: 'root'
})
export class HcService {
link:string;
  constructor(private mbs:MatBottomSheet,public ink:Router) { }
  public files(){
    this.mbs.open(FilesMbsComponent,{
      
        panelClass: 'btm'
    
    });
  }
  public pc_files(){
    this.mbs.open(PcFilesComponent,{
      
      panelClass: 'btm'
  
  });
  }
  iframe_load:boolean =true;
is_panel:boolean=false;
is_panel_link:string;
if_loaded(){
  $(".loader").css("display","none");
  console.log("hecta is ready");
}
Download(link:string){
this.link=link;
this.ink.navigate(['deals/download']);
}
back(){
  this.is_panel=false;
}
download(){
window.location.href=this.link;
}
}
