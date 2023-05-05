import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerManagementComponent } from './banner-management/banner-management.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { FaqComponent } from './faq/faq.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LeaveComponent } from './leave/leave.component';



const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
      { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      { path: 'contentManagement', loadChildren: () => import('./content-management/content-management.module').then(m => m.ContentManagementModule) },
      { path: 'enquirydata', loadChildren: () => import('./enquirydata/enquirydata.module').then(m => m.EnquirydataModule) },
      { path: 'contactdata', loadChildren: () => import('./contactdata/contactdata.module').then(m => m.ContactdataModule) },
      { path: 'banner-management', component: BannerManagementComponent },
      { path: 'our-team', component: OurTeamComponent },
      { path: 'testimonial', component: TestimonialComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'event', component: EventComponent },
      { path: 'attendence', component: AttendenceComponent },
      { path: 'timesheet', component: TimesheetComponent },
      { path: 'leave', component: LeaveComponent }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
