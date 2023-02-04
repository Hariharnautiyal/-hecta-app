import { Component } from '@angular/core';

@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.scss']
})
export class CsComponent {
  hovered:boolean=false;
  ngAfterViewInit(){
    $(".logo").text('Hecta');
    $('.content').click(res=>{
      if(this.hovered==false){
        $('.logo').css("animation","logo-rt-fd 1s ease-in forwards");
        setTimeout(()=>{
          this.hovered=true;
          $('.cs').css("display","none");
          const data=`
          <div class="logo" style="opacity:0;">Instagram</div>
          <div class="logo" style="opacity:0;">Youtube</div>
          <div class="logo" style="opacity:0;">Stackoverflow</div>
          `;
          $(".csContainer").html(data);
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
}
