import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusProjetosComponent } from './pages/meus-projetos/meus-projetos.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [

  {
    path: 'meus-projetos', component: MeusProjetosComponent
  },
  {
    path: '', component: SobreMimComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
