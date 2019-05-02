import { Component } from '@angular/core';
import { legends} from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  legends: Array<string> = [];
  results = [];

  ngOnInit() {
  }

  onSearch() {
    console.log(`Search: ${this.searchInput}`)

  }
}
