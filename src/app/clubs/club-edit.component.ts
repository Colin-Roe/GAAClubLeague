import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { IClubs } from "./clubs";
import { ClubService } from "./club-servcies";

function ratingsRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
}

@Component({
  selector: "pm-club-edit",
  templateUrl: "./club-edit.component.html",
  styleUrls: ["./club-edit.component.css"],
})
export class ClubEditComponent implements OnInit {
  pageTitle: string;
  editClubForm: FormGroup;
  club: IClubs;
  errorMessage: string;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    this.editClubForm = this.fb.group({
      clubName: ["", [Validators.required, Validators.minLength(3)]],
      clubCode: ["", [Validators.required, Validators.minLength(3)]],
      clubLocation: ["", [Validators.required, Validators.minLength(3)]],
      starRating: [null, ratingsRange(1, 5)],
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
      next: (club: IClubs) => this.displayClub(club),
      error: (err) => (this.errorMessage = err),
    });
  }

  displayClub(club: IClubs): void {
    if (this.editClubForm) {
      this.editClubForm.reset();
    }
    this.club = club;

    if (this.club.clubId === 0) {
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

  save() {
    console.log(this.editClubForm);
    console.log("Saved: " + JSON.stringify(this.editClubForm.value));
  }
}
