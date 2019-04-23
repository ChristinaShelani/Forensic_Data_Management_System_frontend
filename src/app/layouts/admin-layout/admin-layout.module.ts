import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdmindashboardComponent } from '../../pages/admindashboard/admindashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserAccessComponent } from 'app/pages/user-access/user-access.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import { AdminEditUserDetailComponent } from 'app/pages/admin-edit-user-detail/admin-edit-user-detail.component';
import { UserProfileDeleteComponent } from 'app/components/user-profile-delete/user-profile-delete.component';
import { UserProfileEditComponent } from 'app/components/user-profile-edit/user-profile-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
  ],
  declarations: [
    AdmindashboardComponent,
    IconsComponent,
    UserAccessComponent,
    AdminEditUserDetailComponent,
    UserProfileDeleteComponent,
    UserProfileEditComponent,
  ]
})

export class AdminLayoutModule {}
