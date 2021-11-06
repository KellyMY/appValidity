import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddValidityPageRoutingModule } from './add-validity-routing.module';

import { AddValidityPage } from './add-validity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddValidityPageRoutingModule
  ],
  declarations: [AddValidityPage]
})
export class AddValidityPageModule {}
