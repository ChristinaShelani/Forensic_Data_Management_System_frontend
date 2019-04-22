import { Routes } from '@angular/router';

import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AddComponent } from 'app/components/add/add.component';
import { EditComponent } from 'app/components/edit/edit.component';
import { DeleteComponent } from 'app/components/delete/delete.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';

export const DemoLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }
    { path: 'dashboard',      component: DemodashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'add',   component: AddComponent },
    { path: 'edit',   component: EditComponent },
    { path: 'delete',   component: DeleteComponent },
    { path: 'retrieve',   component: RetrieveComponent },

];
