import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from "src/app/pages/services/interfaces/game.interface";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    url: string = "http://localhost:3000/api/categories";

    constructor(private http: HttpClient) { }

    getGame = (): Observable<any[]> => {
        return this.http.get<any[]>(`${this.url}`);
    }

    postGame = (game: any): Observable<any> => {
        return this.http.post<any>(`${this.url}`, game);
    }

    deleteGame = (id: string): Observable<any> => {
        return this.http.delete<any>(`${this.url}/${id}`);
    }

    updateGame = (id: string, game: Game): Observable<any> => {
        return this.http.put<any>(`${this.url}/${id}`, game);
    }

    playGame = (idGame: string): Observable<any> => {
        return this.http.get<any>(`${this.url}/${idGame}`);
    }
}
