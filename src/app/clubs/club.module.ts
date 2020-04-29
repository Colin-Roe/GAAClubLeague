import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces';
import { SharedModule } from '../shared/shared.module';
import { ClubRoutingModule } from './club-routing.module';
import { ClubListComponent } from './club-list.component';
import { ClubDetailComponent } from './club-detail.component';
import { ClubEditComponent } from './club-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & confuguring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ClubData } from "./club-data";



@NgModule({
  declarations: [
    ClubListComponent,
    ClubDetailComponent,
    ConvertToSpacesPipe,
    ClubEditComponent,
  ],
  imports: [
    SharedModule,
    ClubRoutingModule,
    InMemoryWebApiModule.forRoot(ClubData, { delay: 1000 }),
    ReactiveFormsModule,
  ],
})
export class ClubModule {}
