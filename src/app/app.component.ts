

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'hecta';
  constructor(public http:HttpClient){

  }
ngOnint(){

}
hovered:boolean=false;
ngAfterViewInit(){
  $('.content').on("click", res=>{
console.log('hoveres');
  });
  $(".logo").text('Hecta');
  $('.content').hover(res=>{
    if(this.hovered==false){
      $('.logo').css("animation","logo-rt-fd 1s ease-in forwards");
      setTimeout(()=>{
        this.hovered=true;
        $(".logo").text('Instagram');
        $('.logo').css("opacity","0");
        $('.logo').css("animation","logo-rt-fd-out 1s ease-in forwards");
        
      },1000);
    }else{
      $('.logo').css("animation","logo-rt-fd 1s ease-in forwards");
    setTimeout(()=>{
      this.hovered=false;
      $(".logo").text('Hecta');
      $('.logo').css("opacity","0");
      $('.logo').css("animation","logo-rt-fd-out 1s ease-in forwards");
      
    },1000);
    }
    
  });
}
hover(){
  console.log('dfdf');
}
}
