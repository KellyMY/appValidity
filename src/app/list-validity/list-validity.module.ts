import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListValidityPageRoutingModule } from './list-validity-routing.module';

import { ListValidityPage } from './list-validity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListValidityPageRoutingModule
  ],
  declarations: [ListValidityPage]
})
export class ListValidityPageModule {}
