import { ImageDetailComponent } from './image-detailes/image-detailes.component';
import { SBSComponent } from './sbs/sbs.component';
import { GalleryComponent } from './image-gallery/image-gallery.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:GalleryComponent},
  {path:'about-us',component:InputUserDataFormComponent},
  {path:'images/:id',component:ImageDetailComponent},
  {path:'sbs',component:SBSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
