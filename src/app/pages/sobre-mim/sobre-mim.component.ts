import { Component } from '@angular/core';

@Component({
  selector: 'sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {

  name = '';
  private nome = 'David Oliveira De Souza Junior';

  sobreMim = '';
  private textoSobreMim = 'Olá, sou um jovem de 22 anos, apaixonado por tecnologia e residente em Osasco, SP. Minha jornada acadêmica começou com a Gestão de TI, que me proporcionou uma base sólida para compreender o vasto universo da tecnologia da informação. Em 2023, concluí meu curso de Programador Web Java no renomado Instituto PROA, uma experiência que aprimorou significativamente minhas habilidades técnicas.   Atualmente, estou expandindo meu conhecimento em Angular no Senac, sempre buscando estar à frente das tendências tecnológicas. Além disso, tenho a oportunidade de aplicar e aprimorar minhas habilidades na prática como estagiário em Desenvolvimento de Sistemas na Montreal Informática. Minha paixão pela tecnologia é o que me motiva todos os dias. Estou empenhado em construir uma carreira sólida neste setor em constante crescimento, sempre buscando aprender e evoluir  ';

  constructor(){
    this.escreverNome();
    this.escreverSobreMim();

  }
  escreverNome(){
    const t = this.nome.split('');
    t.forEach((char, i) => {
      setTimeout(() => { this.name += char; }, 120 * i);
    });
  }

  escreverSobreMim(){
    const t = this.textoSobreMim.split('');
    t.forEach((char, i) => {
      setTimeout(() => { this.sobreMim += char; }, 50 * i);
    });
  }

  downloadCurriculum() {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '../../assets/VITOR_MOUTIM_CURRICULO.pdf');
      link.setAttribute('download', 'VITOR_MOUTIM_CURRICULO.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    flipCard(event: Event) {
      const card = (event.target as Element).closest('.card');
      if (card) {
        card.classList.toggle('flipped');
      }
    }
  }



