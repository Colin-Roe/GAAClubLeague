import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ClubListComponent } from "./club-list.component";
import { ClubDetailGuard } from "./club-detail.guard";
import { ClubDetailComponent } from "./club-detail.component";
import { ClubEditComponent } from './club-edit.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "club-list", component: ClubListComponent },
      {
        path: "clubs/:id",
        canActivate: [ClubDetailGuard],
        component: ClubDetailComponent
      },
      { path: 'clubs/:id/edit', component: ClubEditComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ClubRoutingModule {}
