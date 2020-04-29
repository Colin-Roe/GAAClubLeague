import { Component, OnInit } from "@angular/core";
import { IClub } from "../models/club";
import { ClubService } from "../core/club.servcie";
import { ClubTrackerError } from '../models/clubTrackerError';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "./club-list.component.html",
  styleUrls: ["./club-list.component.css"],
})
export class ClubListComponent implements OnInit {
  pageTitle: string = "Club List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredClubs = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.clubs;
  }

  filteredClubs: IClub[];
  clubs: IClub[] = [];

  constructor(private clubService: ClubService, private route: ActivatedRoute) {}

  onRatingClicked(message: string): void {
    this.pageTitle = "Club List: " + message;
  }

  performFilter(filterBy: string): IClub[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.clubs.filter(
      (club: IClub) =>
        club.clubName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    let resolvedData: IClub[] | ClubTrackerError = this.route.snapshot.data['resolvedClubs'];

    if (resolvedData instanceof ClubTrackerError) {
      console.log(`Club List component error': ${resolvedData.friendlyMessage}`);
    } else {
      this.clubs = resolvedData;
      this.filteredClubs = this.clubs;
    }
  }

  deleteClub(clubId: number): void {
    this.clubService.deleteClub(clubId).subscribe({
      next: () => {
        let index: number = this.clubs.findIndex((club) => club.id == clubId);
        this.clubs.splice(index, 1);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
