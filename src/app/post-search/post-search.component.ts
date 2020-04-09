import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>()

  search = ''

  constructor() { }

  ngOnInit(): void {
  }

  onStartSearch() {
    this.onSearch.emit(this.search)
  }

}
