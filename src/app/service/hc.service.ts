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
}
