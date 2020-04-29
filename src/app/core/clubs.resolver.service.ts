import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { IClub } from "../models/club";
import { ClubService } from "../core/club.servcie";
import { ClubTrackerError } from "../models/clubTrackerError";

@Injectable({
    providedIn: 'root'
})
export class ClubResolverService implements Resolve<IClub[] | ClubTrackerError> {

    constructor(private clubService: ClubService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClub[] | ClubTrackerError> {
        return this.clubService.getClubs()
            .pipe(
                catchError(err => of(err))
            );
    }
}