import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NewPhotoComponent } from '../../modals/new-photo/new-photo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    NewPhotoComponent
  ]
})
export class TabsPageModule {}
