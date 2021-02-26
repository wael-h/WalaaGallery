import { PaintingWisdomsService } from './../paintingwisdoms.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';    
import { ImageService } from '../image.service';    
    
@Component({    
  selector: 'app-imagegallery',    
  templateUrl: './image-gallery.component.html',    
  styleUrls: ['./image-gallery.component.css']    
})    
    
export class GalleryComponent implements OnChanges {    
  images:any[];    
  filterBy?: string = 'all'    
  allImages:any[] = [];     
  threeImages:any[] = [];    
    
  wisdom:any; 
  constructor(private imageService: ImageService,private _PaintingWisdomsService: PaintingWisdomsService) {    
    this.allImages = this.imageService.getImages();  
    this.threeImages = this.imageService.getThreeImages(); 
    this.wisdom = this._PaintingWisdomsService.getWisdom();       
  }     
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    
}   