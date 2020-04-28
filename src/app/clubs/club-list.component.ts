import { Component, OnInit } from "@angular/core";
import { IClub } from "../members/club";
import { ClubService } from "../core/club.servcie";
import { ClubTrackerError } from '../models/clubTrackerError';

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

  constructor(private clubService: ClubService) {}

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
    this.clubService.getClubs().subscribe({
      next: (clubs: IClub[]) => {
        this.clubs = clubs;
        this.filteredClubs = this.clubs;
      },
      error: (err: ClubTrackerError) => (this.errorMessage = err.friendlyMessage),
    });
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
