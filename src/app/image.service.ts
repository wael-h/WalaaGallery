import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0,6);    
    } 
    getThreeImages() {    
        return this.allImages = Imagesdelatils.slice(0,3);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "category": "old", "url": "./assets/Images/w (1).jpg","name":"wowwww"  },        
    { "id": 2, "category": "old", "url": "./assets/Images/w (2).jpg" ,"name":"wowwww" },        
    { "id": 3, "category": "new", "url": "./assets/Images/w (3).jpg" ,"name":"wowwww" },        
    { "id": 4, "category": "wa", "url": "./assets/Images/w (4).jpg" ,"name":"wowwww" },        
    { "id": 5, "category": "new", "url": "./assets/Images/w (5).jpg" ,"name":"wowwww" },        
    { "id": 6, "category": "new", "url": "./assets/Images/w (6).jpg" ,"name":"wowwww" },        
    { "id": 7, "category": "his", "url": "./assets/Images/w (7).jpg" ,"name":"wowwww" }     
    // { "id": 8, "category": "w", "url": "../../assets/Images/w (8).jpg" ,"name":"wowwww" },        
    // { "id": 9, "category": "w", "url": "../../assets/Images/w (9).jpg" ,"name":"wowwww" },        
    // { "id": 10, "category": "w", "url": "../../assets/Images/w (10).jpg" ,"name":"wowwww" },        
    // { "id": 11, "category": "w", "url": "../../assets/Images/w (11).jpg" ,"name":"wowwww" },        
    // { "id": 12, "category": "w", "url": "../../assets/Images/w (12).jpg" ,"name":"wowwww" },        
    // { "id": 13, "category": "w", "url": "../../assets/Images/w (13).jpg" ,"name":"wowwww" },        
    // { "id": 14, "category": "w", "url": "../../assets/Images/w (14).jpg" ,"name":"wowwww" },        
    // { "id": 15, "category": "w", "url": "../../assets/Images/w (15).jpg" ,"name":"wowwww" },        
    // { "id": 16, "category": "w", "url": "../../assets/Images/w (16).jpg" ,"name":"wowwww" },        
    // { "id": 17, "category": "w", "url": "../../assets/Images/w (17).jpg" ,"name":"wowwww" },        
    // { "id": 18, "category": "w", "url": "../../assets/Images/w (18).jpg" ,"name":"wowwww" },        
    // { "id": 19, "category": "w", "url": "../../assets/Images/w (19).jpg" ,"name":"wowwww" },        
    // { "id": 20, "category": "w", "url": "../../assets/Images/w (20).jpg" ,"name":"wowwww" },     
    // { "id": 21, "category": "w", "url": "../../assets/Images/w (21).jpg" ,"name":"wowwww" },        
    // { "id": 22, "category": "w", "url": "../../assets/Images/w (22).jpg" ,"name":"wowwww" },        
    // { "id": 23, "category": "w", "url": "../../assets/Images/w (23).jpg" ,"name":"wowwww" },        
    // { "id": 24, "category": "w", "url": "../../assets/Images/w (24).jpg" ,"name":"wowwww" },        
    // { "id": 25, "category": "w", "url": "../../assets/Images/w (25).jpg" ,"name":"wowwww" },        
    // { "id": 26, "category": "w", "url": "../../assets/Images/w (26).jpg" ,"name":"wowwww" },        
    // { "id": 27, "category": "w", "url": "../../assets/Images/w (27).jpg" ,"name":"wowwww" },        
    // { "id": 28, "category": "w", "url": "../../assets/Images/w (28).jpg" ,"name":"wowwww" },        
    // { "id": 29, "category": "w", "url": "../../assets/Images/w (29).jpg" ,"name":"wowwww" },         
    // { "id": 30, "category": "w", "url": "../../assets/Images/w (30).jpg" ,"name":"wowwww" },        
    // { "id": 31, "category": "w", "url": "../../assets/Images/w (31).jpg" ,"name":"wowwww" },        
    // { "id": 32, "category": "w", "url": "../../assets/Images/w (32).jpg" ,"name":"wowwww" },        
    // { "id": 33, "category": "w", "url": "../../assets/Images/w (33).jpg" ,"name":"wowwww" },        
    // { "id": 34, "category": "w", "url": "../../assets/Images/w (34).jpg" ,"name":"wowwww" }  
    
] 