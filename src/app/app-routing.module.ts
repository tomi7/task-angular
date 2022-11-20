import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelancerDetailComponent } from './freelancer-detail/freelancer-detail.component';
import { FreelancerParentComponent } from './freelancer-parent/freelancer-parent.component';


const routes: Routes = [
  {path: 'freelancers', component: FreelancerParentComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: FreelancerDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
