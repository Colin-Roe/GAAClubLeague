import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";

import { Member } from "./member";

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get("email");
  const confirmControl = c.get("confirmEmail");

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: "pm-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.css"]
})
export class MemberComponent implements OnInit {
  memberForm: FormGroup;
  member = new Member();
  emailMessage: string;

  private emailValidationMessages = {
    // key value pair where the key is the validation rule name
    required: "Please enter your email address.",
    email: "Please enter a valid email address."
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.memberForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ["", [Validators.required, Validators.email]],
          confirmEmail: ["", Validators.required]
        },
        { validator: emailMatcher }
      ),
      addAddress: true
    });

    const emailControl = this.memberForm.get("emailGroup.email");
    emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => this.setMessage(emailControl));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = "";
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map(key => this.emailValidationMessages[key])
        .join(" ");
    }
  }

  save() {
    console.log(this.memberForm);
    console.log("Saved: " + JSON.stringify(this.memberForm.value));
  }
}
