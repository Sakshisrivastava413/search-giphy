import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {

  results: any[] = [];
  searchedOnce = false;
  value: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    document.getElementById('inputBox').focus();
  }

  searchGiphy() {
    this.searchService.searchGifs(this.value)
      .subscribe((resp: any) => {
        this.searchedOnce = true;
        this.results = resp.data;
      });
  }

}
