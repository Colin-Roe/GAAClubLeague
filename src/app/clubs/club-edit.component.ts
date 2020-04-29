import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";

import { IClub } from "../models/club";
import { ClubService } from "../core/club.servcie";

import { NumberValidators } from "../shared/number.validator";
import { ClubTrackerError } from '../models/clubTrackerError';

@Component({
  selector: "pm-club-edit",
  templateUrl: "./club-edit.component.html",
  styleUrls: ["./club-edit.component.css"],
})
export class ClubEditComponent implements OnInit {
  pageTitle: string;
  editClubForm: FormGroup;
  club: IClub;
  errorMessage: string;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    this.editClubForm = this.fb.group({
      clubName: ["", [Validators.required, Validators.minLength(3)]],
      clubCode: ["", [Validators.required, Validators.minLength(3)]],
      clubLocation: ["", [Validators.required, Validators.minLength(3)]],
      starRating: [null, NumberValidators.range(1, 5)],
    });

    // Read the club Id from the route parameter
    this.sub = this.route.paramMap.subscribe((params) => {
      const id = +params.get("id");
      this.getClub(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getClub(id: number): void {
    this.clubService.getClub(id).subscribe({
      next: (club: IClub) => this.displayClub(club),
      error: (err: ClubTrackerError) => (console.log(err.friendlyMessage)),
    });
  }

  displayClub(club: IClub): void {
    if (this.editClubForm) {
      this.editClubForm.reset();
    }
    this.club = club;

    if (this.club.id === 0) {
      this.pageTitle = "Add Club";
    } else {
      this.pageTitle = `Edit Club: ${this.club.clubName}`;
    }

    this.editClubForm.patchValue({
      clubName: this.club.clubName,
      clubCode: this.club.clubCode,
      clubLocation: this.club.clubLocation,
      starRating: this.club.starRating,
    });
  }

  saveClub(): void {
    if (this.editClubForm.valid) {
      if (this.editClubForm.dirty) {
        const c = { ...this.club, ...this.editClubForm.value };

        if (c.Id === 0) {
          this.clubService.createClub(c).subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
        } else {
          this.clubService.updateClub(c).subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.editClubForm.reset();
    this.router.navigate(['/club-list']);
  }
}
