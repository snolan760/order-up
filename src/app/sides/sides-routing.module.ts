import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidesPage } from './sides.page';

const routes: Routes = [
  {
    path: '',
    component: SidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidesPageRoutingModule {}
