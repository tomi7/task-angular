import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  feelancers: Freelancer[] = [];
  title: string = "Halaman Dashboard"

  constructor(private freelancerService: FreelancerService){}

  ngOnInit(): void {
    this.feelancers = []
    this.getFreelancers()
  }

  getFreelancers(): void {
    // this.heroes = this.heroService.getHeroes()
    this.freelancerService.getFreelancers()
      .subscribe(feelancers => this.feelancers = feelancers.slice(1,5));
  }
}
