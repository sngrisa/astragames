import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements AfterViewInit, OnDestroy {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout: any = 8000;
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

 

}
