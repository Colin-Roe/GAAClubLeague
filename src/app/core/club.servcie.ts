import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { IClub } from "../members/club";
import { ClubTrackerError } from '../models/clubTrackerError';

@Injectable({
  providedIn: "root",
})
export class ClubService {
  private clubUrl = "api/club";

  constructor(private http: HttpClient) {}

  getClubs(): Observable<IClub[] | ClubTrackerError> {
    return this.http.get<IClub[]>(this.clubUrl).pipe(
      tap((data) => console.log("All: " + JSON.stringify(data))),
      catchError(err => this.handleHttpError(err))
    );
  }

  getClub(id: number): Observable<IClub | ClubTrackerError> {
    if (id === 0) {
      return of(this.initializeClub());
    }
    const url = `${this.clubUrl}/${id}`;
    return this.http.get<IClub>(url).pipe(
      tap((data) => console.log("getClub: " + JSON.stringify(data))),
      catchError(err => this.handleHttpError(err))
    );
  }

  createClub(club: IClub): Observable<IClub | ClubTrackerError> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    club.id = null;
    return this.http.post<IClub>(this.clubUrl, club, { headers })
      .pipe(
        tap(data => console.log('createClub: ' + JSON.stringify(data))),
        catchError(err => this.handleHttpError(err))
      );
  }

  updateClub(club: IClub): Observable<IClub | ClubTrackerError> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = `${this.clubUrl}/${club.id}`;
    return this.http.post<IClub>(url, club, { headers: headers }).pipe(
      tap(() => console.log("updateClub:" + club.id)),
      // Return the club on a update
      map(() => club),
      catchError(err => this.handleHttpError(err))
    );
  }

  deleteClub(clubId: number): Observable<void> {
    const url = `${this.clubUrl}/${clubId}`;
    return this.http.delete<void>(url)
  }

  private handleHttpError(err: HttpErrorResponse): Observable<ClubTrackerError> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let dataError = new ClubTrackerError();
    dataError.errorNumber = 100;
    dataError.message = err.statusText;
    dataError.friendlyMessage = "An error ocurred retrieving data.";
    return throwError(dataError);
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
