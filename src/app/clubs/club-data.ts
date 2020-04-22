import { IClub } from "./club";
import { InMemoryDbService } from "angular-in-memory-web-api";

export class ClubData implements InMemoryDbService {
  createDb() {
    const club: IClub[] = [
      {
        id: 1,
        clubName: "Stuttgart GAA",
        clubCode: "DE-14",
        clubLocation: "Stuttgart",
        clubImage: "assets/images/stuttgart_logo.png",
        starRating: 3.5,
      },
      {
        id: 2,
        clubName: "Darmstadt GAA",
        clubCode: "DE-10",
        clubLocation: "Darmstadt",
        clubImage: "assets/images/darmstadt_logo.png",
        starRating: 4.2,
      },
      {
        id: 3,
        clubName: "Berlin GAA",
        clubCode: "DE-8",
        clubLocation: "Berlin",
        clubImage: "assets/images/berlin_gaa_logo.png",
        starRating: 4.0,
      },
      {
        id: 4,
        clubName: "Zürich GAA",
        clubCode: "DE-14",
        clubLocation: "Zürich",
        clubImage: "assets/images/zürich_gaa_logo.png",
        starRating: 3.4,
      },
      {
        id: 5,
        clubName: "Amsterdam GAA",
        clubCode: "NL-6",
        clubLocation: "Amsterdam",
        clubImage: "assets/images/amsterdam_gaa_logo.png",
        starRating: 4.6,
      },
    ];
    return { club };
  }
}
