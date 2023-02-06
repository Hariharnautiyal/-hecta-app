import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
code:string | undefined;
constructor(public link:Router){

}
doned(ans:string | undefined){
 if(ans!=undefined){
if(ans=="9997275028"){
  $('.code').css("animation","logo-rt-fd 2s ease-in forwards");
  setTimeout(()=>{
    $('.code').css("display","none");
   this.link.navigate(['deals/welcome']);
  },2000);
}
 }
}
}
