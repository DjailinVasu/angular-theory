import { Component, OnInit, Input, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Post } from './../app.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  @Input() post: Post

  @ContentChild('info', {static: true}) infoRef: ElementRef

  @Output() onRemove = new EventEmitter<number>()

  constructor() { }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log('ngOnChanges')
  }

  ngOnInit(): void {
    // console.log('ngOnInit')
    // console.log( this.infoRef.nativeElement ) //получили доступ к контенту
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit')
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy')
  }

}
