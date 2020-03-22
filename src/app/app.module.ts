import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ClubModule } from './clubs/club.module';
import { MemberModule } from './members/member.module';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClubModule,
    MemberModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
