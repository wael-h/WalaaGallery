import { PaintingWisdomsService } from './paintingwisdoms.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';  
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnChanges {
  title = 'WGallery';
 
  ngOnChanges() {    
    // this.wisdom = this.PaintingWisdomsService.getWisdom();    
  }  
}
