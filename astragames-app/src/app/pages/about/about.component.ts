import { Component } from '@angular/core';
import { PlusPoints } from './grid-cards/interface/plusPoints.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  

  plusPoints: PlusPoints [] = 
  [
    {
      id:"1",
      name: "100 % Compatibles",
      icon: "bi bi-window-stack",
      desc: "Estamos preparados para funcionar en diversas plataformas, como PC, consolas de videojuegos, dispositivos móviles y otros dispositivos conectados a internet.",
    },
    {
      id:"2",
      name: "Actualizaciones y Parches",
      icon: "bi bi-tools",
      desc: "Mantenemos los juegos actualizados con parches y actualizaciones periódicas para mejorar la estabilidad, agregar nuevo contenido y corregir posibles errores.",
    },
    {
      id:"3",
      name: "Amplio catálogo de Juegos",
      icon: "bi bi-bucket",
      desc: "Ofrecemos una extensa biblioteca de videojuegos que abarca diversos géneros y estilos, desde juegos de acción hasta juegos de estrategia.",
    },
    {
      id:"4",
      name: "Comunidad y Redes Sociales",
      icon: "bi bi-people-fill",
      desc: "Proporcionamos herramientas para que los jugadores se conecten, formen comunidades, compartan contenido y participen en foros de discusión. La plataforma fomenta la interacción social entre los usuarios.",
    },

  ]

}
