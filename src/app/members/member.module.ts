import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MemberRoutingModule } from "./member-routing.module";
import { MemberComponent } from "./member.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ReactiveFormsModule
  ]
})
export class MemberModule {}
