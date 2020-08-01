import { AfterContentInit, AfterViewInit, Component, ElementRef } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.page.html',
  styleUrls: ['./direct-messages.page.scss'],
})
export class DirectMessagesPage implements AfterViewInit {

  constructor(
    private navController: NavController
  ) { }

  ngAfterViewInit() {

  }

  public goBack() {
    this.navController.pop();
  }

}
