import { Component, OnInit } from '@angular/core';
import { PreloadingService } from '../services/preloading-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  title: string = "Astra Games";

  opacityChange: number = 1;

  public splashTransition!: any;

  public showSplash = true;

  readonly ANIMATION_DURATION = 1;

  constructor(
    private splashScreenStateService: PreloadingService) { }


  private hideSplashAnimation() {
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;

    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1000);
  }

  ngOnInit(): void {
    this.splashScreenStateService.subscribe((res: any) => {
      this.hideSplashAnimation();
    });
  }
}
