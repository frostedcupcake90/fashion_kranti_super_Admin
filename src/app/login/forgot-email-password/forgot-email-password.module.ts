import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotEmailPasswordPageRoutingModule } from './forgot-email-password-routing.module';

import { ForgotEmailPasswordPage } from './forgot-email-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotEmailPasswordPageRoutingModule
  ],
  declarations: [ForgotEmailPasswordPage]
})
export class ForgotEmailPasswordPageModule {}
