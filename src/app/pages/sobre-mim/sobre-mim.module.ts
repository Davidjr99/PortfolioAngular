import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreMimComponent } from './sobre-mim.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [SobreMimComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,

  ],
  exports: [
    SobreMimComponent

  ]
})
export class SobreMimModule { }
