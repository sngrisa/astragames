import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import "jquery";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit{

  constructor(private activateRouter: ActivatedRoute){}

  ngOnInit(): void {
    
  }

  item: any = 
  {
    id: 1,
    name: "Sheep Raider Ship",
    type: "Ropa",
    desc: "Remera con el logo de coyote y perro del juego de looney tunes, sheep raider",
    price: 5000,
    game: "Sheep Raider",
    imgUrl: "https://ih1.redbubble.net/image.3248436815.4414/ssrco,slim_fit_t_shirt,womens,heather_grey,front,tall_three_quarter,750x1000.jpg",
    enchangePrice: 45,
    stock: true,
  }


}
