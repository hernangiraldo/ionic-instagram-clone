import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { fancyAnimation } from '../../animations';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  public goToDirectMessages(): void {
    this.navController.navigateForward('/direct-messages', { animated: true , animation: fancyAnimation});
  }

}
