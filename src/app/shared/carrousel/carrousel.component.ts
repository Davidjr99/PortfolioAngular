import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  images: string[] = ['../../../assets/html5.svg','../../../assets/css3.svg', '../../../assets/javascript.svg', '../../../assets/git.svg','../../../assets/github.svg', '../../../assets/json.svg','../../../assets/npm.svg','../../../assets/nodedotjs.svg','../../../assets/python.svg','../../../assets/typescript.svg','../../../assets/react.svg','../../../assets/vuedotjs.svg','../../../assets/angular.svg','../../../assets/springboot.svg','../../../assets/azuredevops.svg','../../../assets/trello.svg', '../../../assets/jira.svg','../../../assets/canva.svg','../../../assets/figma.svg',]; // Adicione os caminhos das suas imagens aqui
  currentImageIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();

      console.log('carosel')
    }, 2000);

  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

}
