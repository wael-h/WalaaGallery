import { Component } from '@angular/core';    
import { ImageService } from '../image.service';    
import { ActivatedRoute } from '@angular/router'    
    
@Component({
  selector: 'app-image-detailes',    
  templateUrl: './image-detailes.component.html',
  styleUrls: ['./image-detailes.component.css']   
})    
export class ImageDetailComponent {    
  image:any    
    
  constructor(private imageService: ImageService,    
    private route: ActivatedRoute) { }    
    
  ngOnInit(){    
    this.image = this.imageService.getImage(    
      this.route.snapshot.params['id']   
    ) ;   
      console.log('img: ' + this.image.url); 
  }    
}    