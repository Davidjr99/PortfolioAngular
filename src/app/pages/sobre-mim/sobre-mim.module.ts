import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreMimComponent } from './sobre-mim.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarrouselModule } from '../../shared/carrousel/carrousel.module';



@NgModule({
  declarations: [SobreMimComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    CarrouselModule,
    MatButtonModule


  ],
  exports: [
    SobreMimComponent

  ]
})
export class SobreMimModule { }
