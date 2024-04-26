import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreMimComponent } from './sobre-mim.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SobreMimComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SobreMimComponent

  ]
})
export class SobreMimModule { }
