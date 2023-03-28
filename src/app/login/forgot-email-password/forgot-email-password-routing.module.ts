import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotEmailPasswordPage } from './forgot-email-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotEmailPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotEmailPasswordPageRoutingModule {}
