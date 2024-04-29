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
import { ShopComponent } from './shop/shop.component';
import { CardsIIComponent } from './shop/grid-cards/cards/cardsII.component';
import { Carrousel2Component } from "./shop/carrousel2/carrousel2.component";
import { GridCardsIIComponent } from './shop/grid-cards/grid-cardsII.component';
import { ItemsComponent } from './shop/items/items.component';
import { ItemComponent } from './shop/items/item/item.component';
import { LoadingComponent } from './loading/loading.component';
import { PreloadingService } from './services/preloading-service.service';
import { CartComponent } from './shop/cart/cart.component';
import { CartDetailsComponent } from './shop/cart/cart-details/cart-details.component';
import { CartRoutingModule } from "./shop/cart/cart-routing.module";
import { UsersService } from './backend/services/users.service';
import { ProductComponent } from './shop/product/product.component';
import { ProductImageComponent } from './shop/product/product-image/product-image.component';
import { QuotesComponent } from './shop/product/quotes/quotes.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RecoveryFormComponent } from './password-recovery/recovery-form/recovery-form.component';
import { HeroComponent } from './home/hero/hero.component';
import { ProsAndConsComponent } from './home/pros-and-cons/pros-and-cons.component';
import { ItemPosConsComponent } from './home/pros-and-cons/item-pos-cons/item-pos-cons.component';



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
    NewsletterComponent,
    ShopComponent,
    CardsIIComponent,
    Carrousel2Component,
    GridCardsIIComponent,
    ItemsComponent,
    ItemComponent,
    LoadingComponent,
    CartComponent,
    CartDetailsComponent,
    ProductComponent,
    ProductImageComponent,
    QuotesComponent,
    PasswordRecoveryComponent,
    RecoveryFormComponent,
    HeroComponent,
    ProsAndConsComponent,
    ItemPosConsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule
  ],
  providers: [
    GamesService,
    PreloadingService,
    UsersService
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    LoadingComponent,
    PasswordRecoveryComponent,
    RecoveryFormComponent,
    ItemPosConsComponent
  ]
})
export class PagesModule { }
