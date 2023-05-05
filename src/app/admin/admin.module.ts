import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { BannerManagementComponent } from './banner-management/banner-management.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { FaqComponent } from './faq/faq.component';
import { AddEditBannerComponent } from './banner-management/add-edit-banner/add-edit-banner.component';
import { ViewBannerComponent } from './banner-management/view-banner/view-banner.component';
import { DeleteBannerComponent } from './banner-management/delete-banner/delete-banner.component';
import { AddEditOurTeamComponent } from './our-team/add-edit-our-team/add-edit-our-team.component';
import { ViewOurTeamComponent } from './our-team/view-our-team/view-our-team.component';
import { DeleteOurTeamComponent } from './our-team/delete-our-team/delete-our-team.component';
import { AddEditTestimonialComponent } from './testimonial/add-edit-testimonial/add-edit-testimonial.component';
import { DeleteTestimonialComponent } from './testimonial/delete-testimonial/delete-testimonial.component';
import { ViewTestimonialComponent } from './testimonial/view-testimonial/view-testimonial.component';
import { AddEditFaqComponent } from './faq/add-edit-faq/add-edit-faq.component';
import { ViewFaqComponent } from './faq/view-faq/view-faq.component';
import { DeleteFaqComponent } from './faq/delete-faq/delete-faq.component';
import { AddEditBlogComponent } from './blog/add-edit-blog/add-edit-blog.component';
import { ViewBlogComponent } from './blog/view-blog/view-blog.component';
import { DeleteBlogComponent } from './blog/delete-blog/delete-blog.component';
import { AddEditEventComponent } from './event/add-edit-event/add-edit-event.component';
import { ViewEventComponent } from './event/view-event/view-event.component';
import { DeleteEventComponent } from './event/delete-event/delete-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    SettingComponent,
    BannerManagementComponent,
    OurTeamComponent,
    TestimonialComponent,
    BlogComponent,
    EventComponent,
    FaqComponent,
    AddEditBannerComponent,
    ViewBannerComponent,
    DeleteBannerComponent,
    AddEditOurTeamComponent,
    ViewOurTeamComponent,
    DeleteOurTeamComponent,
    AddEditTestimonialComponent,
    DeleteTestimonialComponent,
    ViewTestimonialComponent,
    AddEditFaqComponent,
    ViewFaqComponent,
    DeleteFaqComponent,
    AddEditBlogComponent,
    ViewBlogComponent,
    DeleteBlogComponent,
    AddEditEventComponent,
    ViewEventComponent,
    DeleteEventComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
