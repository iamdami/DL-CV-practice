import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MergedPage } from './merged.page';

const routes: Routes = [
  {
    path: '',
    component: MergedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MergedPageRoutingModule {}
