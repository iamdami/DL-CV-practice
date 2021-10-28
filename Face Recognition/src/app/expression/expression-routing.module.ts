import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpressionPage } from './expression.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressionPageRoutingModule {}
