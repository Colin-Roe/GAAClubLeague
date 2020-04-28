import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IClub } from "../members/club";
import { ClubService } from "../core/club.servcie";
import { ClubTrackerError } from '../models/clubTrackerError';

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
      next: (club: IClub) => (this.club = club),
      error: (err: ClubTrackerError) => (console.log(err.friendlyMessage)),
    });
  }

  onBack(): void {
    this.router.navigate(["/club-list"]);
  }
}
