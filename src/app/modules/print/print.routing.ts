import { PnpComponent } from './pnp/pnp.component';
import { PrintComponent } from './print.component';
import { Routes } from '@angular/router';

export const PrintRoutes: Routes = [
  { path: 'print', component: PrintComponent },
  { path: 'pnp', component: PnpComponent }
];