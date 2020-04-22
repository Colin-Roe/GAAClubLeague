import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IClub } from "./club";
import { ClubService } from "./club.servcie";

@Component({
  templateUrl: "./club-detail.component.html",
  styleUrls: ["./club-detail.component.css"],
})
export class ClubDetailComponent implements OnInit {
  pageTitle = "Club Details";
  errorMessage = "";
  club: IClub | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
      this.getClub(id);
    }
  }

  getClub(id: number) {
    this.clubService.getClub(id).subscribe({
      next: (club) => (this.club = club),
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(["/club-list"]);
  }
}
