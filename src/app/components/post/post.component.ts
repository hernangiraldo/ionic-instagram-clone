import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommentsComponent } from '../../modals/comments/comments.component';
import { modalSlideEnterAnimation, modalSlideLeaveAnimation } from '../../modals/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {

  public slideOptions: any;
  public pager: boolean;
  public init: boolean;
  public liked: boolean;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.slideOptions = {
      loop: false,
      allowSlideNext: false,
      allowSlidePrev: false
    };
    this.pager = true;
    this.liked = true;
    this.init = true;
    setTimeout( () => this.init = false, 500);
  }

  ngOnDestroy(): void {

  }

  public likedPost(): void {
    this.liked = !this.liked;
  }

  public async viewComments(): Promise<void> {
    const modal = await this.modalController.create({
      component: CommentsComponent,
      enterAnimation: modalSlideEnterAnimation,
      leaveAnimation: modalSlideLeaveAnimation,
    });

    await modal.present();
  }
}
