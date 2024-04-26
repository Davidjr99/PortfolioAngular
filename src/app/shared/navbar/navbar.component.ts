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
  navegarParaRota(rota: string){

    this.router.navigate([rota]);
    console.log('teste')
  }


onTabChange(event: MatTabChangeEvent) {
  switch (event.index) {
    case 0:
      this.navegarParaRota('/');
      break;
    case 1:
      this.navegarParaRota('/meus-projetos');
      break;
    default:
      break;
  }
}
}
