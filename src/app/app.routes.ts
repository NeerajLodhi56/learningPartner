import { Routes } from '@angular/router';
import { InlinecrudComponent } from './inlinecrud/inlinecrud.component';
import { InlinecrudUpdateComponent } from './inlinecrud-update/inlinecrud-update.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
     { path: '', redirectTo: 'navbar', pathMatch: 'full' },
     {path:'navbar',component: NavbarComponent},
  {path:'inlinecrud',component: InlinecrudComponent},
  {path:'inlinecrudUpdate',component: InlinecrudUpdateComponent},
];
