import { Component, OnInit } from '@angular/core';
// import {HEROES} from "../data"
import { FreelancerService } from '../service/freelancer.service';
import { Freelancer, FreelancerModel } from '../model/freelancer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-freelancer-parent',
  templateUrl: './freelancer-parent.component.html',
  styleUrls: ['./freelancer-parent.component.css']
})

export class FreelancerParentComponent implements OnInit{
  // heroes = HEROES;
  freelancers: Freelancer[] = [];
  title: string = "Judul awal"
  count: number = 1;
  inc(value: number){
    this.count = this.count + value;
  }

  modelFreelancer = new FreelancerModel('Your hero name', '98765543', 'skill', 'your notes')
  submitted = false;

  constructor(private freelancerService: FreelancerService, private location: Location){}

  ngOnInit(): void {
    this.freelancers = []
    this.getFreelancers()
  }

  onSubmit(){
    this.submitted = true;
    this.addFreelancer()
  }

  getFreelancers(): void {
    // this.heroes = this.heroService.getHeroes()
    this.freelancerService.getFreelancers()
      .subscribe(freelancers => this.freelancers = freelancers);
  }

  goBack(): void {
    this.location.back()
  }

  validateNo(e: any): boolean{
    const charCode = e.which ? e.which: e.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      return false
    }
    return true
  }

  addFreelancer(
    name: string = this.modelFreelancer.name, 
    phone: string = this.modelFreelancer.phone, 
    skill: string = this.modelFreelancer.skill, 
    notes: string = this.modelFreelancer.notes
    ): void {
      name = name.trim();
      if(!name) {return}
      this.freelancerService.addHeroService({name, phone, skill, notes} as Freelancer)
        .subscribe(freelancer => {
          this.freelancers.push(freelancer)
        })
  }

  // addHero(name: string, phone: string): void {
  //   name = name.trim();
  //   if(!name) {return}
  //   let id: number = this.heroes.length + 1;
  //   this.heroService.addHeroService({id, name, phone} as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero)
  //     })
  // }
}