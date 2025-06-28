import { Routes } from '@angular/router';
import { Floor3Component } from './components/floor3/floor3.component';
import { Floor4Component } from './components/floor4/floor4.component';

export const routes: Routes = [
    {path: '', redirectTo: '/piso3', pathMatch: 'full'},
    {path: 'piso3', component: Floor4Component},
    {path: 'piso4', component: Floor4Component},

];
