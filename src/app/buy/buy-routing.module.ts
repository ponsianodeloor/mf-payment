import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfirmPageComponent} from "./pages/confirm-page/confirm-page.component";
import {CancelPageComponent} from "./pages/cancel-page/cancel-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'confirm', component: ConfirmPageComponent },
      { path: 'cancel', component: CancelPageComponent },
      { path: '**', redirectTo: 'confirm' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
