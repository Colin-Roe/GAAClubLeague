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
  listFilter: string = "cart";
  clubs: IClubs[] = [
    {
      clubId: 1,
      clubName: "Stuttgart GAA",
      clubCode: "ST-124",
      clubLocation: "Stuttgart",
      clubImage: "assets/images/stuttgart_logo.png",
      starRating: 3.5
    },
    {
      clubId: 2,
      clubName: "Darmstadt GAA",
      clubCode: "ST-124",
      clubLocation: "Darmstadt",
      clubImage: "assets/images/stuttgart_logo.png",
      starRating: 4.2
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("In Oninit");
  }
}
