import { Component } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent {
  constructor(private router: Router){

  }
  activeTabIndex: number | null = null;


  navegarParaRota(rota: string){

    this.router.navigate([rota]);

  }


onTabChange(event: MatTabChangeEvent) {
  switch (event.index) {
    case 0:
      this.navegarParaRota('/');
      break;
    case 1:
      this.navegarParaRota('/meus-projetos');



  }
}
isTabActive(index: number): boolean {
  return this.activeTabIndex === index;

}

obterRotaPorIndice(index: number): string {
  // Lógica para retornar a rota correspondente ao índice da aba
  return index === 0 ? '/' : '/meus-projetos';
}
}
