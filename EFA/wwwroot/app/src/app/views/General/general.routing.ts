import { Routes } from '@angular/router';

import { CustomerComponent } from './Customer/customer.component'
import { DashboardComponent } from './Dashboard/dashboard.component';
//@Component_Imports


export const GeneralRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'customer',
                component: CustomerComponent,
                data: { title: 'CUSTOMER.CUSTOMERMENU', breadcrumb: 'CUSTOMER.CUSTOMERMENU' }
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: 'DASHBOARD.DASHBOARDMENU', breadcrumb: 'DASHBOARD.DASHBOARDMENU' }
            }
            //@Component_Routes
        ]
    }
];
