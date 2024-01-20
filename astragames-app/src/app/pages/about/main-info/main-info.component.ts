import { Component } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {

  desc: string = `Somos una plataforma de videojuegos online, que es un espacio virtual que le permite a los usuarios acceder
  y disfrutar de una amplia variedad de videojuegos a través de internet.`;

  title: string = "Acerca de nosotros";

  title_prop: string = "Que es Astra Games?";

}
