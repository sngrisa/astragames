import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { GameComponent } from "./game/game.component";
import { GamesComponent } from "./games.component";


const routes: Routes = [
    {
        path: ':id',
        component: GameComponent
    },
    {
        path:'',
        component: GamesComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule { }