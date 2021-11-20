import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MergedPageRoutingModule } from './merged-routing.module';

import { MergedPage } from './merged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MergedPageRoutingModule
  ],
  declarations: [MergedPage]
})
export class MergedPageModule {}