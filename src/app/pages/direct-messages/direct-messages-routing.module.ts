import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectMessagesPage } from './direct-messages.page';

const routes: Routes = [
  {
    path: '',
    component: DirectMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectMessagesPageRoutingModule {}
