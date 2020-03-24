import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.memberForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        confirmEmail: ["", Validators.required]
      }, { validator: emailMatcher }),
      
      addAddress: true
    });
  }

  save() {
    console.log(this.memberForm);
    console.log("Saved: " + JSON.stringify(this.memberForm.value));
  }
}
