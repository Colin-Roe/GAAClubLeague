import { Injectable } from "@angular/core";
import { IClubs } from "./clubs";

@Injectable({
    providedIn: 'root'
})
export class ClubService {
  getClubs(): IClubs[] {
    return [
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
  }
}
