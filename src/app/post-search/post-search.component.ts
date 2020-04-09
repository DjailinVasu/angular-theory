import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>()
  @Output() OnChangeSearchType: EventEmitter<string> = new EventEmitter<string>()

  search = ''
  searchFor = 'title'

  constructor() { }

  ngOnInit(): void {
  }

  onStartSearch() {
    this.onSearch.emit(this.search);
    this.OnChangeSearchType.emit(this.searchFor);
  }

  changeSearhType(type: string) {
    this.searchFor = type;
    this.OnChangeSearchType.emit(this.searchFor);
  }

}
