import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  public async closeModal(): Promise<void> {
    await this.modalController.dismiss();
}

}
