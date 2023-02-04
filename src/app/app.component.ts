

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'
              
]
})
export class AppComponent {
  
  title = 'hecta';
  constructor(public http:HttpClient){

  }
ngOnint(){
$(".loader").css("display","none");
}


hover(){
  console.log('dfdf');
}
}
