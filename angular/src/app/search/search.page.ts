import { Component, OnInit } from '@angular/core';
import { legends} from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit{
  legends: Array<string> = [];
  filteredLegends : Array<string> = [];
 private _searchInput: string;
 get searchInput():string{
   return this._searchInput
 }

set searchInput(value: string){
this.searchInput = value;
this.filteredLegends = this.filterLegends(value)
}

filterLegends(searchString:string){
  return this.legends.filter(legends => legends.toLowerCase().indexOf(searchString.toLowerCase())!==-1)
}
  ngOnInit() {
    console.log(this.legends = legends)
    console.log(this.filteredLegends = legends)
    this.legends = legends;
    this.filteredLegends = this.legends;

  }


}
