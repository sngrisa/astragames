import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { GameComponent } from "./game/game.component";


const routes: Routes = [
    {
        path: ':id',
        component: GameComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule { }