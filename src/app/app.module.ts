import { MainContentComponent } from './main-content/main-content.component';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';    
import { FormsModule } from '@angular/forms';    
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';  
import { ImageService } from './image.service'; 
import { PaintingWisdomsService } from './paintingwisdoms.service';  
import { GalleryComponent} from './image-gallery/image-gallery.component';
import { ImageDetailComponent } from './image-detailes/image-detailes.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { SBSComponent } from './sbs/sbs.component';
        

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterimagesPipe,
    MainNavigationBarComponent,
    MainContentComponent,
    SBSComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule        
  ],
  providers:[ImageService, FilterimagesPipe, PaintingWisdomsService ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
