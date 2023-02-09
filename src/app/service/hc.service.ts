import { Injectable } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {FilesMbsComponent} from 'src/app/mbs/files-mbs/files-mbs.component';

@Injectable({
  providedIn: 'root'
})
export class HcService {

  constructor(private mbs:MatBottomSheet) { }
  public files(){
    console.log('clicked');
    this.mbs.open(FilesMbsComponent,{
      
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
  this.is_panel=true;
  this.is_panel_link=link;
  const htm=
  `
  <iframe src='`+link+`' frameborder="0" class="dwn_body"
  style='
  height: 100%;
  width: 100%;
  overflow: hidden;
  '
  ></iframe>`
  ;
  $(htm).appendTo('.downloader');
  $('.dwn_body').ready(()=>{
    this.if_loaded();
  });
}
back(){
  this.is_panel=false;
}
}
