import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { EditImagesComponent } from './edit-images/edit-images.component';


@NgModule({
  declarations: [
    ImagesComponent,
    EditImagesComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
