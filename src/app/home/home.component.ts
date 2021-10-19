import { Component, OnInit } from '@angular/core';
import { StackApiService } from '../services/stack-api.service';
import { take, retry } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items!: any[];

  constructor(
    private stackexchange: StackApiService
  ) { }

  ngOnInit(): void {
    // this.stackexchange.getQuestionListing({
    //   page: 1,
    //   pagesize: 20,
    //   sort: 'creation',
    //   order: 'desc'
    // }).pipe(
    //   take(1), retry(3)
    // ).subscribe((data) => {
    //   console.log(data);
    // })
    console.log(this.stackexchange.listingdata)
    this.items = this.stackexchange.listingdata.items;
  }

}
