import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { User } from "src/app/pages/register/interface/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    url: string = "http://localhost:3000/api";

    constructor(private http: HttpClient) { }

    getUsers = (): Observable<User[]> => {
        return this.http.get<User[]>(`${this.url}/users`);
    }

    postUser = (user: User): Observable<User> => {
        return this.http.post<User>(`${this.url}/register`, user);
    }

    toLoginUser = (user: User): Observable<User> => {
        return this.http.post<User>(`${this.url}/login`, user);
    }

    deleteUser = (email: string): Observable<User> => {
        return this.http.delete<User>(`${this.url}/users/${email}`);
    }

    updateUser = (user: User, email: string): Observable<User> => {
        return this.http.put<User>(`${this.url}/users/${email}`, user);
    }

    goToPrivate = (): Observable<any> => {
        return this.http.get<any>(`${this.url}/private`);
    }

}