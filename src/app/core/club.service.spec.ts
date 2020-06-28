import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from "@angular/common/http/testing";

import { ClubService } from "./club.servcie";
import { IClub } from "../models/Club";

let clubService: ClubService;
let httpTestingController: HttpTestingController;

describe("ClubService Test", () => {
  let testClubs: IClub[] = [
    {
      id: 1,
      clubName: "Stuttgart",
      clubCode: "DE-12",
      clubLocation: "Stuttgart",
      starRating: 3,
      clubImage: "",
    },
    {
      id: 2,
      clubName: "Darmstadt",
      clubCode: "DE-14",
      clubLocation: "Darmstadt",
      starRating: 3.5,
      clubImage: "",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClubService],
    });

    clubService = TestBed.get(ClubService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("Should GET all clubs", () => {
      clubService.getClubs().subscribe(
          (data: IClub[]) => {
              expect(data.length).toBe(2);
          }
      );
      
      let clubsRequest: TestRequest = httpTestingController.expectOne('/api/clubs');
      expect(clubsRequest.request.method).toEqual('GET');

      clubsRequest.flush(testClubs);
      httpTestingController.verify();
  });

  it("Test 2", () => {});
});
