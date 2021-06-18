import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageBotonesPage } from './page-botones.page';

const routes: Routes = [
  {
    path: '',
    component: PageBotonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageBotonesPageRoutingModule {}
