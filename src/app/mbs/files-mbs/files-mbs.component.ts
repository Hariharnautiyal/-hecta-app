import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {HcService} from 'src/app/service/hc.service';
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
  constructor(private _bottomSheetRef: MatBottomSheetRef<FilesMbsComponent>,private hc:HcService) {
    
    this.folders=[
      {
        name:'Video Editor',
        files:[
         {
  name:'Power Director',
  size:50,
  icon:'video',
  link:"http://localhost:4200/cs"
             }
        ]
      },
      {
        name:'Social Media',
        files:[
          {
            name:'Instagram Hack',
            size:50,
            icon:'instagram',
            link:'sb'
          },
          {
            name:'Youtube Hack',
            size:70,
            icon:'youtube',
            link:'sb'
          },
          {
            name:'Whatsapp Hack',
            size:50,
            icon:'whatsapp',
            link:'sb'
          },
        ]
      },
      {
        name:'Game',
        files:[
          {
            name:'Secret FF',
            size:50,
            icon:'gamepad',
            link:'sb'
          }
        ]
      },
      {
        name:'hacking apps',
        files:[
          {
            name:"Mt Manager",
            size:50,
            icon:'bones',
            link:'sd'
          },
          {
            name:'Lucky Patcher',
            size:50,
            icon:'bones',
            link:'sd'
          },
          {
            name:"Apk Editor",
            size:50,
            icon:'bones',
            link:'sd'
          }
        ]
      }
    ];
    this.list=this.folders;
  }
  
  ngOnInit(): void {
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
export class folder{
  name:string;
  files:file[];
}
export class file{
  name:string;
  size:number;
  link:string;
  icon:string;
}