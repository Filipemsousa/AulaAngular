import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SaboresComponent } from './pages/sabores/sabores.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"sabores",component:SaboresComponent},
    
];
