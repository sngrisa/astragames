import { Component } from '@angular/core';
import { menuItem } from './menu-items/data/item';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  title: string = "Astra Games";

  items: menuItem[] =
    [
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

  itemLogin: menuItem[] = [
    {
      id: 1,
      name: "Login",
      url: "/login",
      icon: "bi bi-person-circle"
    },
    {
      id: 2,
      name: "Carrito",
      url: "/cart",
      icon: "bi bi-cart-fill"
    }
  ];


}
