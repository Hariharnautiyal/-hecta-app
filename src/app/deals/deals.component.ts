import { Component } from '@angular/core';
import {HcService} from 'src/app/service/hc.service';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {
  constructor(public hc:HcService){}
  link='http://localhost:4200';
  permission:boolean = false;
  music=new Audio;
  ngOninit(){
  
  }
  ngAfterViewInit(){
    this.music.src="./assets/zombue.mp3";
    const x= this.music.load();
    $(document).on("click",()=>{
      if(this.permission==false){
        const y=this.music.play();
        $('.mic_text').text(" playing");
        this.permission=true;
      }
    });


  }
hover(){
}
}
