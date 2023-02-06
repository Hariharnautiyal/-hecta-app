import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(public link:Router){}
back(){
  $(".card").css("animation","logo-rt-fd 2s ease-in forwards");
  setTimeout(()=>{
   this.link.navigate(['deals/code']);
  },2000);
}
forward(){
  $(".card").css("animation","logo-rt-fd 2s ease-in forwards");
  setTimeout(()=>{
   this.link.navigate(['deals/files']);
  },2000);
}
}
