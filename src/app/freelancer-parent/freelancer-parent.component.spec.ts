import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerParentComponent } from './freelancer-parent.component';

describe('FreelancerParentComponent', () => {
  let component: FreelancerParentComponent;
  let fixture: ComponentFixture<FreelancerParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
