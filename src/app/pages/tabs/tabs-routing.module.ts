import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'news-feed',
        children: [
          {
            path: '',
            loadChildren: () => import('./../news-feed/news-feed.module').then( m => m.NewsFeedPageModule)
          }
        ]
      },
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./../discover/discover.module').then( m => m.DiscoverPageModule)
          }
        ]
      },
      {
        path: 'activity',
        children: [
          {
            path: '',
            loadChildren: () => import('./../activity/activity.module').then( m => m.ActivityPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
