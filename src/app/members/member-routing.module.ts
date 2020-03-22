import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MemberComponent } from "./member.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "member", component: MemberComponent }
    ])
  ]
})
export class MemberRoutingModule { }
