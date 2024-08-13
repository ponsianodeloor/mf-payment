import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { CancelPageComponent } from './pages/cancel-page/cancel-page.component';


@NgModule({
  declarations: [
    ConfirmPageComponent,
    CancelPageComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule
  ]
})
export class BuyModule { }
