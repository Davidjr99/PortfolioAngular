import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatTab, MatTabGroup, MatTabLabel, MatTabsModule} from '@angular/material/tabs';
import { NavbarComponent } from './navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { SobreMimModule } from '../../pages/sobre-mim/sobre-mim.module';
import { MeusProjetosModule } from '../../pages/meus-projetos/meus-projetos.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    SobreMimModule,
    MeusProjetosModule,
    FlexLayoutModule


  ],
  exports: [
    NavbarComponent

  ]
})
export class NavbarModule { }
