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
  private textoSobreMim = 'Um estudante de Gestão de TI de 22 anos de Osasco, SP. Completei um curso de Programador Web Java no Instituto PROA em 2023 e atualmente estou aprimorando minhas habilidades em Angular no Senac. Estou ganhando experiência prática como estagiário em Desenvolvimento de Sistemas na Montreal Informática. Minha paixão pela tecnologia me motiva a buscar uma carreira sólida neste setor em crescimento.';

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


  }



