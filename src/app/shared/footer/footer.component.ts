import { Component } from '@angular/core';
import { menuFooter } from './data/itemsFoooter.interface';
import { socialItem } from './socialitems/interface/socialitem.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  title: string = "Astra Games";

  getDate = (): number => {
    return new Date().getFullYear();
  }

  items: menuFooter[] = [
    {
      id: 1,
      name: "Home",
      url: "/home",
      icon: "bi bi-house-door-fill"
    },
    {
      id: 2,
      name: "About",
      url: "/about",
      icon: "bi bi-book-fill"
    },
    {
      id: 3,
      name: "Games",
      url: "/games",
      icon: "bi bi-dice-5-fill"
    },
    {
      id: 4,
      name: "Shop",
      url: "/shop",
      icon: "bi bi-bag-fill"
    }
  ];


  itemsSocial: socialItem[] = 
  [
    {
      id: 1,
      name: "Faceboook",
      url: "",
      icon: "bi bi-facebook",
    },
    {
      id: 2,
      name: "Twitter",
      url: "",
      icon: "bi bi-twitter-x",
    },
    {
      id: 3,
      name: "Instagram",
      url: "",
      icon: "bi bi-instagram",
    },
  ]

}
