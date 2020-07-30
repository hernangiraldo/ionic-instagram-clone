import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(
    private menuController: MenuController
  ) { }

  public async openMenu() {
    await this.menuController.open();
  }

}
