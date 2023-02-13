import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { HcService } from 'src/app/service/hc.service';
import { FilesMbsComponent } from '../files-mbs/files-mbs.component';
import {folder ,data} from '../../../assets/data';
@Component({
  selector: 'app-pc-files',
  templateUrl: './pc-files.component.html',
  styleUrls: ['./pc-files.component.scss']
})
export class PcFilesComponent {
  list:any;
  constructor(private _bottomSheetRef: MatBottomSheetRef<FilesMbsComponent>,private hc:HcService,public mts:MatBottomSheet,private http:HttpClient,public data:data){
    this.list=data.pc_folders;
  };
  download(link:string){
    this.hc.Download(link);
}
}
