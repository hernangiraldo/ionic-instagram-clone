import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.scss'],
})
export class NewPhotoComponent {

  constructor(
    private modalController: ModalController
  ) { }

  public async closeModal() {
    await this.modalController.dismiss();
  }

}
