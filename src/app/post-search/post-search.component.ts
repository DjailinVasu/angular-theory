import { Component, OnInit, Output, EventEmitter, Provider, forwardRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PostSearchComponent),
  multi: true
}

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss'],
  providers: [VALUE_ACCESSOR]
})

export class PostSearchComponent implements ControlValueAccessor{

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>()
  @Output() OnChangeSearchType: EventEmitter<string> = new EventEmitter<string>()

  state : {[key: string]: string} = {
    searchFor: 'title',
    search: ''
  }

  private OnChange = (value: any) => {}

  onStartSearch() {
    console.log(this.state)
    this.OnChange(this.state)
  }


  registerOnChange(fn:any):void {
      this.OnChange = fn
  }


  setState(state: {[key: string]: string}) {
    this.state = {...this.state, ...state};
    this.OnChange(this.state)
  }

  registerOnTouched() {

  }

  setDisabledState() {

  }

  writeValue() {

  }

}
