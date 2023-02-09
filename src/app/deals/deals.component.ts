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
  ngOninit(){

  }

}
