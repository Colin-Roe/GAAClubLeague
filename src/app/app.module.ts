import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ClubListComponent } from "./clubs/club-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces";
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [AppComponent, ClubListComponent, ConvertToSpacesPipe, StarComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}