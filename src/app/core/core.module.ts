import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ClubService } from "./club.servcie";
import { AddHeaderInterceptor } from "./add-header.interceptor";
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoggerService,
    ClubService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true }
  ]
})
export class CoreModule { }
