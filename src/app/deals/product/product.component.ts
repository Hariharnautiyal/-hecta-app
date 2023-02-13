import { Component } from '@angular/core';
import { HcService } from 'src/app/service/hc.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
constructor(public hc:HcService){};
}
