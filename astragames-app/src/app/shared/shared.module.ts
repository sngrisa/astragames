import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemsComponent } from './navbar/menu-items/menu-items.component';
import { RouterModule } from '@angular/router';
import { LoginitemComponent } from './navbar/loginitem/loginitem.component';
import { ItemsMenuComponent } from './footer/items-menu/items-menu.component';
import { SocialitemsComponent } from './footer/socialitems/socialitems.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MenuItemsComponent,
    LoginitemComponent,
    ItemsMenuComponent,
    SocialitemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,

  ]
})
export class SharedModule { }
