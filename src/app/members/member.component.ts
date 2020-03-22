import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

import { Member } from "./member";

@Component({
  selector: 'pm-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberForm: FormGroup;
  member = new Member();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.memberForm = this.fb.group(
      {
        firstName: '',
        lastName: '',
        email: '',
        addAddress: true
      }
    );
  }

  save() {
    console.log(this.memberForm);
    console.log('Saved: ' + JSON.stringify(this.memberForm.value));
  }
}
