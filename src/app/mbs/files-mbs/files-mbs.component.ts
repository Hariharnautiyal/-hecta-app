import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {HcService} from 'src/app/service/hc.service';
import { HttpClient } from '@angular/common/http';
import {data,folder,file} from '../../../assets/data';
@Component({
  selector: 'app-files-mbs',
  templateUrl: './files-mbs.component.html',
  styleUrls: ['./files-mbs.component.scss']
})
export class FilesMbsComponent {
  list:any;
  Music:boolean;
  folders:folder[];
  filemode:boolean=false;
  constructor(private _bottomSheetRef: MatBottomSheetRef<FilesMbsComponent>,private hc:HcService,public mts:MatBottomSheet,private http:HttpClient,private data:data) {
    this.folders=data.folders;
    this.list=data.folders;
  }
  
  ngOnInit(){
    
  }
  ngAfterViewInit(){
    
  }
  change(){
  
  }

  files(folder:folder){
    this.filemode=true;
    let files=folder.files;
    this.list=files;
  }
  download(link:string){
this.hc.Download(link);
  }
  back(){
    this.filemode=false;
    this.list=this.folders;
  }
}
