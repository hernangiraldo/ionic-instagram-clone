import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectMessagesPageRoutingModule } from './direct-messages-routing.module';

import { DirectMessagesPage } from './direct-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectMessagesPageRoutingModule
  ],
  declarations: [DirectMessagesPage]
})
export class DirectMessagesPageModule {}
