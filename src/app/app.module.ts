import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ClubListComponent } from "./clubs/club-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces";
import { StarComponent } from "./shared/star.component";
import { ClubDetailComponent } from "./clubs/club-detail.component";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    ClubListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ClubDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "clubs", component: ClubListComponent },
      { path: "clubs/:id", component: ClubDetailComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
