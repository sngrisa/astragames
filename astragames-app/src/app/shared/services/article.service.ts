import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ArticlesService{

    url: string = "http://localhost:3000/api/articles";

    constructor(private http: HttpClient){}

    getArticles = (): Observable <any[]> =>{
        return this.http.get<any[]>(`${this.url}`);
    }

    postArticle = (article: any): Observable<any>=>{
        return this.http.post<any[]>(`${this.url}`, article);
    }

    putArticle = (article: any, idArticle: string):Observable<any> =>{
        return this.http.put<any>(`${this.url}/${idArticle}`, article);
    }

    deleteArticle = (idArticle: string): Observable<any> =>{
        return this.http.delete(`${this.url}/${idArticle}`);
    }

}