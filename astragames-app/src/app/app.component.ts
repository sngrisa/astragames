import { Component, OnInit } from '@angular/core';
import { PreloadingService } from './pages/services/preloading-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public showSplash: boolean = true;
 
  title = 'astragames-app';

  constructor(
    private splashScreenStateService: PreloadingService) { }
 

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
   }, 5000);
  }

}
