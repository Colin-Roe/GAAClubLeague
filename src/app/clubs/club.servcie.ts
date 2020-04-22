import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { IClub } from "./club";

@Injectable({
  providedIn: "root",
})
export class ClubService {
  private clubUrl = "api/club";

  constructor(private http: HttpClient) {}

  getClubs(): Observable<IClub[]> {
    return this.http.get<IClub[]>(this.clubUrl).pipe(
      tap((data) => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getClub(id: number): Observable<IClub> {
    if (id === 0) {
      return of(this.initializeClub());
    }
    const url = `${this.clubUrl}/${id}`;
    return this.http.get<IClub>(url).pipe(
      tap((data) => console.log("getClub: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createClub(club: IClub): Observable<IClub> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    club.id = null;
    return this.http.post<IClub>(this.clubUrl, club, { headers })
      .pipe(
        tap(data => console.log('createClub: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateClub(club: IClub): Observable<IClub> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = `${this.clubUrl}/${club.id}`;
    return this.http.post<IClub>(url, club, { headers: headers }).pipe(
      tap(() => console.log("updateClub:" + club.id)),
      // Return the club on a update
      map(() => club),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = "";
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

  private initializeClub(): IClub {
    // Return an initialized object
    return {
      id: 0,
      clubName: null,
      clubCode: null,
      clubLocation: null,
      clubImage: null,
      starRating: 0,
    };
  }
}
