import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  images: string[] = ['../../../assets/figmaImg.png', '../../../assets/Canvaimg-removebg-preview.png', '../../../assets/gitImg-removebg-preview.png', '../../../assets/imggithub-removebg-preview.png', '../../../assets/htmlImg.png', '../../../assets/cssImg-removebg-preview.png', '../../../assets/JavaScript-logo.png', '../../../assets/Typescript_logo_2020.svg-removebg-preview.png', '../../../assets/imgReact-removebg-preview.png', '../../../assets/Angularimg-removebg-preview.png', '../../../assets/springimg-removebg-preview.png', '../../../assets/javaImg-removebg-preview.png', '../../../assets/djangoImg-removebg-preview.png', '../../../assets/pythonImg-removebg-preview.png']; // Adicione os caminhos das suas imagens aqui
  currentImageIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();

      console.log('carosel')
    }, 1000);

  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

}
