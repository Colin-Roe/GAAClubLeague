import { Component, OnInit } from "@angular/core";
import { IClubs } from "./clubs";

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
  clubs: IClubs[] = [
    {
      clubId: 1,
      clubName: "Stuttgart GAA",
      clubCode: "DE-12",
      clubLocation: "Stuttgart",
      clubImage: "assets/images/stuttgart_logo.png",
      starRating: 3.5
    },
    {
      clubId: 2,
      clubName: "Darmstadt GAA",
      clubCode: "DE-10",
      clubLocation: "Darmstadt",
      clubImage: "assets/images/darmstadt_logo.png",
      starRating: 4.2
    },
    {
      clubId: 3,
      clubName: "Berlin GAA",
      clubCode: "DE-8",
      clubLocation: "Berlin",
      clubImage: "assets/images/berlin_gaa_logo.png",
      starRating: 4.0
    },
    {
      clubId: 4,
      clubName: "Zürich GAA",
      clubCode: "DE-14",
      clubLocation: "Zürich",
      clubImage: "assets/images/zürich_gaa_logo.png",
      starRating: 3.4
    },
    {
      clubId: 5,
      clubName: "Amsterdam GAA",
      clubCode: "NL-6",
      clubLocation: "Amsterdam",
      clubImage: "assets/images/amsterdam_gaa_logo.png",
      starRating: 4.6
    }
  ];

  constructor() {
    this.filteredClubs = this.clubs;
    this.listFilter = "";
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
    console.log("In Oninit");
  }
}
