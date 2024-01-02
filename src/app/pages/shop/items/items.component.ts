import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import "jquery";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements AfterViewInit {

  $!: JQueryStatic;

  ngAfterViewInit(): void {
    this.$(".size").on("click", () => {
      this.$(this).toggleClass("focus").siblings().removeClass("focus");
    });
  }

  swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

}
