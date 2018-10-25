import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getAll (): Observable<User[]> {
        return this.http.get<User[]>(environment.api_routes.users_get_all)
            .pipe(
                tap(heroes => console.log('Fetched users')),
                catchError(this.handleError('getAll', []))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(`${operation} failed: ${error.message}`, error);

            return of(result as T);
        };
    }
}
