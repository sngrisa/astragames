import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GamesComponent } from './pages/games/games.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "games", loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule) },
  { path: "register", component: RegisterComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
