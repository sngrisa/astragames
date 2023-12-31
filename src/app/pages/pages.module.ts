import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GamesService } from './services/games.service';
import { ImgComponent } from './about/img/img.component';
import { GridCardsComponent } from './about/grid-cards/grid-cards.component';
import { MainInfoComponent } from './about/main-info/main-info.component';
import { ContactComponent } from './about/contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrouselComponent } from './home/carrousel/carrousel.component';
import { LayoutComponent } from './home/layout/layout.component';
import { NewsComponent } from './home/layout/news/news.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ImgComponent,
    GridCardsComponent,
    MainInfoComponent,
    ContactComponent,
    RegisterComponent,
    RegisterFormComponent,
    CarrouselComponent,
    LayoutComponent,
    NewsComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    GamesService
  ],
  exports: [
    HomeComponent,
    AboutComponent,
   ]
})
export class PagesModule { }
