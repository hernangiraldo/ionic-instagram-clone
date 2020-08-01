import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsFeedPageRoutingModule } from './news-feed-routing.module';

import { NewsFeedPage } from './news-feed.page';
import { StoryComponent } from '../../components/story/story.component';
import { StorySliderComponent } from '../../components/story-slider/story-slider.component';
import { PostComponent } from '../../components/post/post.component';
import { CommentsComponent } from '../../modals/comments/comments.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsFeedPageRoutingModule
  ],
  declarations: [
    NewsFeedPage,
    StoryComponent,
    StorySliderComponent,
    PostComponent,
    CommentsComponent,
    HeaderComponent
  ]
})
export class NewsFeedPageModule {}
