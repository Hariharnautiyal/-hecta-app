import { Component } from '@angular/core';
import {HcService} from 'src/app/service/hc.service';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
 
  constructor(public hc:HcService){

}
}
