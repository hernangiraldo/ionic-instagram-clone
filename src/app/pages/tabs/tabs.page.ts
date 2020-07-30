import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewPhotoComponent } from '../../modals/new-photo/new-photo.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async addNewPhoto() {
    const modal = await this.modalController.create({
      component: NewPhotoComponent
    });

    return await modal.present();
  }

}
