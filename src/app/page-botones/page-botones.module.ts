import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageBotonesPageRoutingModule } from './page-botones-routing.module';

import { PageBotonesPage } from './page-botones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageBotonesPageRoutingModule
  ],
  declarations: [PageBotonesPage]
})
export class PageBotonesPageModule {}
