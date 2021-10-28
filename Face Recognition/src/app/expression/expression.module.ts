import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpressionPageRoutingModule } from './expression-routing.module';

import { ExpressionPage } from './expression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpressionPageRoutingModule
  ],
  declarations: [ExpressionPage]
})
export class ExpressionPageModule {}
