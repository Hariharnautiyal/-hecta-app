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

   this.link.navigate(['deals/welcome']);

}else{
  $('.lock').css("color","red");
}
 }else{
  $('.lock').css("color","red");
 }
}
}