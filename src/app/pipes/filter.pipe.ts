import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts:Post[] , search: string = '', searchType: string = 'title'): Post[] {
    if(!search.trim()) {
      return posts
    }

    return posts.filter( post => {
      return post[searchType].toLowerCase().includes(search.toLowerCase())
    })
  }

}
