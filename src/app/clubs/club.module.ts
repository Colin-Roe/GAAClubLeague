import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces';
import { SharedModule } from '../shared/shared.module';
import { ClubRoutingModule } from './club-routing.module';
import { ClubListComponent } from './club-list.component';
import { ClubDetailComponent } from './club-detail.component';



@NgModule({
  declarations: [
    ClubListComponent,
    ClubDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    ClubRoutingModule
  ]
})
export class ClubModule { }
