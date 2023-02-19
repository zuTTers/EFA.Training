import { Routes } from '@angular/router';

import { VaccinationTransactionComponent } from './VaccinationTransaction/vaccinationtransaction.component'
import { VaccinationTypeComponent } from './VaccinationType/vaccinationtype.component'
import { PatientComponent } from './Patient/patient.component'
import { CustomerComponent } from './Customer/customer.component'
import { GenuComponent } from './Genu/genu.component'
import { DashboardComponent } from './Dashboard/dashboard.component';
//@Component_Imports


export const GeneralRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'vaccinationtransaction',
                component: VaccinationTransactionComponent,
                data: { title: 'VACCINATIONTRANSACTION.VACCINATIONTRANSACTIONMENU', breadcrumb: 'VACCINATIONTRANSACTION.VACCINATIONTRANSACTIONMENU' }
            },
            {
                path: 'vaccinationtype',
                component: VaccinationTypeComponent,
                data: { title: 'VACCINATIONTYPE.VACCINATIONTYPEMENU', breadcrumb: 'VACCINATIONTYPE.VACCINATIONTYPEMENU' }
            },
            {
                path: 'customer',
                component: CustomerComponent,
                data: { title: 'CUSTOMER.CUSTOMERMENU', breadcrumb: 'CUSTOMER.CUSTOMERMENU' }
            },
            {
                path: 'patient',
                component: PatientComponent,
                data: { title: 'PATIENT.PATIENTMENU', breadcrumb: 'PATIENT.PATIENTMENU' }
            },
            {
                path: 'genu',
                component: GenuComponent,
                data: { title: 'GENU.GENUMENU', breadcrumb: 'GENU.GENUMENU' }
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
