import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  key: string = '7mTyoLfoXlrvHdLAL401ZO7R2mYxdD3g';
  // keyword: string = "val";

  constructor(private http: HttpClient) { }

  public searchGifs (keyword: string): any {
    return this.http.get(
      'http://api.giphy.com/v1/gifs/search?q='+keyword+'&api_key='+this.key
    )
  }
}
