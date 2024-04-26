import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarModule } from './shared/navbar/navbar.module';


import { SobreMimModule } from './pages/sobre-mim/sobre-mim.module';
import { MeusProjetosModule } from './pages/meus-projetos/meus-projetos.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,

    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        SobreMimModule,
        MeusProjetosModule,
        RouterModule

    ]
})
export class AppModule { }
