import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-files-mbs',
  templateUrl: './files-mbs.component.html',
  styleUrls: ['./files-mbs.component.scss']
})
export class FilesMbsComponent {
  Music:boolean;
  folders:folder[];
  constructor(private _bottomSheetRef: MatBottomSheetRef<FilesMbsComponent>) {
    this.folders=[
      {
        name:'Video Editor',
        items:7,
        files:[
         {
  name:'Power Director',
  size:50,
  icon:'icons'
             }
        ]
      },
      {
        name:'Video Editor',
        items:7,
        files:[
          {
   name:'Power Director',
   size:50,
   icon:'icons'
              }
         ]
      },
      {
        name:'Video Editor',
        items:7,
        files:[
          {
   name:'Power Director',
   size:50,
   icon:'icons'
              }
         ]
      }
    ];
  }
  
  ngOnInit(): void {
  }
  change(){
  
  }
}
export class folder{
  name:string;
  items:number;
  files:file[];
}
export class file{
  name:string;
  size:number;
  icon:string;
}