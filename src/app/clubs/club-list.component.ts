import { Component } from "@angular/core";

@Component({
  selector: "pm-clubs",
  templateUrl: "./club-list.component.html"
})
export class ClubListComponent {
  pageTitle: string = "Club List";
  imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = "cart";
  clubs: any[] = [
    {
      clubId: 1,
      clubName: "Stuttgart GAA",
      clubSport: "Hurling",
      clubLocation: "Stuttgart",
      clubImage: "assets/images/stuttgart_logo.png",
      starRating: 3.5
    },
    {
      clubId: 2,
      clubName: "Darmstadt GAA",
      clubSport: "Hurling",
      clubLocation: "Darmstadt",
      clubImage: "assets/images/stuttgart_logo.png",
      starRating: 4.2
    }
    ];
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
