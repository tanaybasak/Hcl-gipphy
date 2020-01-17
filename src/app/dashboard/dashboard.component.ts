import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchItem : string;
  searchData : string
  previousSearches  = [];
  storedSearch

  constructor() { }

  ngOnInit() {

  }


  performSearch() {
    this.searchData = this.searchItem;
    this.previousSearches.push(this.searchItem);


    setTimeout(() => {
      this.searchItem = '';
     
    },1800)
  }


  onKey($event) {
    localStorage.setItem("previous_search", JSON.stringify(this.previousSearches));
    this.storedSearch = JSON.parse(localStorage.getItem("previous_search"));
  }

  useKeyword(search) {
    this.searchItem = '';
    this.searchItem = search;
  }


}
