import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question-listing',
  templateUrl: './question-listing.component.html',
  styleUrls: ['./question-listing.component.scss'],
})
export class QuestionListingComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {}
}
