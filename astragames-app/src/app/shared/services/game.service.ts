import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from "src/app/pages/services/interfaces/game.interface";

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    url: string = "http://localhost:3000/api/games";

    constructor(private http: HttpClient) { }

    getGames = (): Observable<Game[]> => {
        return this.http.get<Game[]>(`${this.url}`);
    }

    postGame = (game: Game): Observable<Game> => {
        return this.http.post<Game>(`${this.url}`, game);
    }

    deleteGame = (id: string): Observable<Game> => {
        return this.http.delete<Game>(`${this.url}/${id}`);
    }

    updateGame = (id: string, game: Game): Observable<Game> => {
        return this.http.put<Game>(`${this.url}/${id}`, game);
    }

    playGame = (idGame: string): Observable<Game> => {
        return this.http.get<Game>(`${this.url}/${idGame}`);
    }
}