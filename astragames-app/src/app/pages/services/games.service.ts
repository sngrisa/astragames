import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from "./interfaces/game.interface";

@Injectable(
    { providedIn: 'root' }
)
export class GamesService {


    constructor(private http: HttpClient) { }

    getGames = (game: string): Observable<Game[]> => {
        return this.http.get<Game[]>(`./assets/${game}/${game}.json`);
    }

}