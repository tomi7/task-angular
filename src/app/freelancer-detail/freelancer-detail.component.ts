import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import {ActivatedRoute} from '@angular/router';
import { FreelancerService } from '../service/freelancer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-freelancer-detail',
  templateUrl: './freelancer-detail.component.html',
  styleUrls: ['./freelancer-detail.component.css']
})
export class FreelancerDetailComponent implements OnInit {
  freelancer: Freelancer | undefined;

  constructor(
    private freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id')); //"2"
    this.freelancerService.getFreelancer(idParams)
      .subscribe(a => this.freelancer = a)
  }

  goBack(): void {
    this.location.back()
  }
}
