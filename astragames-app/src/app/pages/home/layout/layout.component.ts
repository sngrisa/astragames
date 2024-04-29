import { Component } from '@angular/core';
import { News } from './news/interface/news.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {



  news: News[] =
    [
      {
        id: 1,
        name: "Sorteo social de Astra Games",
        desc: "Seguinos en nuestras redes sociales, que siempre estamos sorteando algunos articulos de nuestra tienda online",
        urlImg: "./../../../../assets/home/giveaway.jpg",
      },
      {
        id: 2,
        name: "Coincactus",
        desc: "Llega CoinCactus, la nueva moneda digital está diseñada con un enfoque seguro, prometemos transacciones rápidas y seguras mientras abrimos el camino hacia un futuro financiero más sostenible.",
        urlImg: "./../../../../assets/home/news2.png",
      },
      {
        id: 3,
        name: "Seguimos sumando más juegos",
        desc: "Seguimos sumando cada vez más juegos a nuestra plataforma, desde videojuegos arcades hasta videojuegos de consolas de sexta generación",
        urlImg: "./../../../../assets/home/consoles.jpg",
      },
    ]

}
