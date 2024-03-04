import { Routes } from '@angular/router';
import { CollectionComponent } from './modules/collection/collection.component';
import { DetailComponent } from './modules/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: CollectionComponent,
  },
  {
    path: 'details',
    component: DetailComponent,
  },
  {
    path: "**",
    redirectTo: '',
  }
];
