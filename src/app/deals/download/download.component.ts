import { Component } from '@angular/core';
import { HcService } from 'src/app/service/hc.service';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {
  constructor(public hc:HcService){};
  icon:boolean=false;
ngAfterViewInit(){
  setTimeout(()=>{
    this.icon=true;
    $(".text").text("Link loaded Download Now.");
  },3000);
}
}
