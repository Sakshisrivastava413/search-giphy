import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  key: string = 'Kg6EmT27Sz7rtl1a3UcjLrE66ImBtpI4';

  constructor(private http: HttpClient) { }

  public searchGifs (keyword: string): any {
    return this.http.get(
      'https://api.giphy.com/v1/gifs/search?q='+keyword+'&api_key='+this.key
    )
  }

  
}
