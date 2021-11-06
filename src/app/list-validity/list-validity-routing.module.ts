import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListValidityPage } from './list-validity.page';

const routes: Routes = [
  {
    path: '',
    component: ListValidityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListValidityPageRoutingModule {}
