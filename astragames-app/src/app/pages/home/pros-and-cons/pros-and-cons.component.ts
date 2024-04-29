import { Component } from '@angular/core';
import { PosAndConsItem } from './item-pos-cons/interfaces/ItemProsAndCons.interface';

@Component({
  selector: 'app-pros-and-cons',
  templateUrl: './pros-and-cons.component.html',
  styleUrls: ['./pros-and-cons.component.scss']
})
export class ProsAndConsComponent {

  titlePros: string = "Ofrecemos una experiencia única y nostálgica para los usuarios";

  pros: PosAndConsItem[] = [
    {
      id: 1,
      name: "Preservación del patrimonio cultural",
      description: "Contribuimos a la preservación y difusión del patrimonio cultural de los videojuegos, permitiendo a las generaciones futuras conocer y disfrutar de los juegos clásicos que dieron forma a la industria.",
      icon: "bi bi-play-circle-fill"
    },
    {
      id: 2,
      name: "Variedad de juegos",
      description: "Ofrecemos una amplia selección de juegos de diferentes géneros y consolas, desde los más populares hasta los más oscuros, brindando una amplia variedad de opciones para elegir.",
      icon: "bi bi-joystick"
    },
    {
      id: 3,
      name: "Compatibilidad",
      description: "Permitimos a los usuarios jugar a juegos de diferentes sistemas y consolas en una sola plataforma, eliminando la necesidad de hardware específico.",
      icon: "bi bi-disc-fill"
    },
    {
      id: 4,
      name: "Accesibilidad",
      description: "Nuestra plataforma de juegos es accesible desde cualquier lugar con conexión a internet, lo que permite a los usuarios jugar en una amplia variedad de dispositivos.",
      icon: "bi bi-universal-access-circle"
    },
    {
      id: 5,
      name: "Comunidad",
      description: "Contamos con una comunidad activa de jugadores que comparten su pasión por los juegos, brindando un espacio para discutir, compartir consejos y trucos, y participar en eventos y desafíos.",
      icon: "bi bi-people-fill"
    },
    {
      id: 6,
      name: "Nostalgia",
      description: "Permitimos a los usuarios revivir y disfrutar de los juegos clásicos que jugaron en su infancia o juventud, lo que les brinda una sensación de nostalgia y conexión emocional con esos momentos pasados.",
      icon: "bi bi-music-player-fill"
    },
    {
      id: 7,
      name: "Mejoras tecnológicas",
      description: "Ofrecemos características y mejoras tecnológicas, como gráficos mejorados, opciones de guardado rápido y carga rápida, que mejoran la experiencia de juego sin sacrificar la autenticidad.",
      icon: "bi bi-tools"
    },
    {
      id: 8,
      name: "Creatividad y modding",
      description: "Fomentamos la creatividad y el modding, permitiendo a los usuarios crear y compartir sus propios juegos, mods y parches, lo que amplía aún más la biblioteca de juegos disponibles y la diversión.",
      icon: "bi bi-wrench-adjustable-circle-fill"
    }
  ];

}
