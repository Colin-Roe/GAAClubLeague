import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IClubs } from './clubs';

@Component({
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
  pageTitle: string = "Club Details";
  club: IClubs;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.club = {
      'clubId': id,
      'clubName': 'Stuttgart GAA',
      'starRating': 3.3,
      'clubLocation': 'Stuttgart',
      'clubCode': 'ST-110',
      'clubImage':'assets/images/stuttgart_logo.png'
    }
  }

  onBack(): void {
    this.router.navigate(['/club-list']);
  }

}
