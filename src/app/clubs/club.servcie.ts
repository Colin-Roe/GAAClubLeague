import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { IClubs } from "./clubs";   

@Injectable({
    providedIn: 'root'
})
export class ClubService {
  private clubUrl = 'api/clubs/clubs.json';

  constructor(private http: HttpClient) {}

  getClubs(): Observable<IClubs[]> {
    return this.http.get<IClubs[]>(this.clubUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getClub(id: number): Observable<IClubs | undefined> {
    return this.getClubs()
      .pipe(
        map((clubs: IClubs[]) => clubs.find(c => c.id === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
