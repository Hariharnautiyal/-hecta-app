import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
code:string | undefined;
file:boolean = false;
doned(ans:string | undefined){
 if(ans!=undefined){
if(ans=="9997275028"){
  $('.code').css("animation","logo-rt-fd 2s ease-in forwards");
  setTimeout(()=>{
    $('.code').css("display","none");
    this.file=true;
  },2000);
}
 }
}
}
