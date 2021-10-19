import { Component, OnInit } from '@angular/core';
import { StackApiService } from '../services/stack-api.service';
import { take, retry } from 'rxjs/operators'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items!: any[];
  formdata: any;
  filterOptions : any =  [
    {
      param : "q" ,
      text : "Search String " ,
      type : "text" ,
    },
    {
      param : "body" ,
      text : "String to appear in question body" ,
      type : "text" ,
    },
    {
      param: "tagged" ,
      text : "Tags" ,
      type : "text" ,
    },
    {
      param: "title" ,
      text : "String to appear in question title" ,
      type : "text" ,
    },
    {
      param: "url" ,
      text : "a url which must be included in post" ,
      type : "text" ,
    },
    {
      param: "user" ,
      text : "Id of user who own the question" ,
      type : "number" ,
    },
    {
      param: "page" ,
      text : "Page Number" ,
      type : "number" ,
    },
    {
      param: "pagesize" ,
      text : "Page Size" ,
      type : "number" ,
    },
    {
      param: "views" ,
      text : "Minimum Views" ,
      type : "number" ,
    },
  ]

  constructor(
    private stackexchange: StackApiService
  ) {
    const obj:any = {};
    for (let i = 0; i < this.filterOptions.length; i++) {
      obj[this.filterOptions[i].param] = new FormControl()
    }
    console.log(obj);
    
    this.formdata = new FormGroup(obj);
   }

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

  submitFilters(data:any){
    // cleaning filter data
    for (var k in data)
      if (!data[k]) delete data[k];

    console.log(data);
    
    this.stackexchange.getQuestionListing(data).pipe(
      take(1), retry(3)
    ).subscribe((data) => {
      this.items = data.items;
      console.log(data);
    })
  }

}
