import { Component, OnInit } from "@angular/core";
import { IClubs } from "./clubs";
import { ClubService } from './club-servcies';

@Component({
  selector: "pm-clubs",
  templateUrl: "./club-list.component.html",
  styleUrls: ["./club-list.component.css"]
})
export class ClubListComponent implements OnInit {
  pageTitle: string = "Club List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;

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

  filteredClubs: IClubs[];
  clubs: IClubs[] = [];

  constructor(private clubService: ClubService) {    
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Club List: ' + message;
  }

  performFilter(filterBy: string): IClubs[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.clubs.filter(
      (club: IClubs) =>
        club.clubName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.clubs = this.clubService.getClubs();
    this.filteredClubs = this.clubs;
  }
}
