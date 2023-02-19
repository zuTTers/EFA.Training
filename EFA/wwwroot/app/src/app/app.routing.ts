import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'others/blank',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
                data: { title: 'Session' }
            }
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'others',
                loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule),
                data: { title: 'Others', breadcrumb: 'OTHERS' }
            },
            {
                path: 'search',
                loadChildren: () => import('./views/search-view/search-view.module').then(m => m.SearchViewModule)
            },
            {
                path: 'system',
                loadChildren: () => import('./views/System/system.module').then(m => m.SystemModule),
                data: { title: 'MAINMENU.SYSTEM', breadcrumb: 'MAINMENU.SYSTEM' }
            },
            {
                path: 'general',
                loadChildren: () => import('./views/General/general.module').then(m => m.GeneralModule),
                data: { title: 'MAINMENU.GENERAL', breadcrumb: 'MAINMENU.GENERAL' }
            }
           

        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];

