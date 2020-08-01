import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {

  @Input() isMyStory: boolean;

  constructor() { }

  ngOnInit() {}

}
