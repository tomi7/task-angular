import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Freelancer } from '../model/freelancer';

@Component({
  selector: 'app-freelancer-child',
  templateUrl: './freelancer-child.component.html',
  styleUrls: ['./freelancer-child.component.css']
})
export class FreelancerChildComponent{
  tanggal = new Date();
  dataKosong: string= "data kosong"

  @Input() count!: number;
  @Input() freelancers!: Freelancer[];

  @Output() incrementEvent = new EventEmitter<number>();
  increment(penambah: number){
    this.incrementEvent.emit(penambah);
    console.log("penambah")
  }
}
