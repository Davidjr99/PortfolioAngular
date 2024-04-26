import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusProjetosComponent } from './meus-projetos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MeusProjetosComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MeusProjetosComponent]
})
export class MeusProjetosModule { }
