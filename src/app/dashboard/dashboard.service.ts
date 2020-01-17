import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }

  apiUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  


  
  getGiffyData(searchTextChanged) {
   return this.http.get<Response>(this.apiUrl + searchTextChanged);
  }
}
