import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatTab, MatTabGroup, MatTabLabel, MatTabsModule} from '@angular/material/tabs';
import { NavbarComponent } from './navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule

  ],
  exports: [
    NavbarComponent

  ]
})
export class NavbarModule { }
