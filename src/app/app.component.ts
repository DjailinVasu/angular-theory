import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

export interface Post {
  title: string
  text: string
  date: Date
  id?: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'Angular Theory';

  search=''
  searchType=''

  posts: Post[] = [
    {
      title: 'Я пробую изучать компоненты Angular',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nemo!',
      id: 1,
      date: this.randomDate(new Date(2012, 0, 1), new Date())
    },
    {
      title: 'Надеюсь, я не трачу время в пустую',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illum accusamus consectetur enim nobis neque!',
      id: 2,
      date: this.randomDate(new Date(2012, 0, 1), new Date())
    },
    {
      title: 'Я изучаю теорию, теперь это директивы',
      text: 'Я уже знаю как писать свои собственный директивы. Директивы это весело, но пока не совсем понятно что я буду с ними делать на практике',
      id: 3,
      date: this.randomDate(new Date(2012, 0, 1), new Date())
    },
    {
      title: 'Я изучаю теорию, теперь это пайпы',
      text: 'Изучать пайпы весело. Я сейчас научусь.. Фильтровать списки?',
      id: 4,
      date: this.randomDate(new Date(2012, 0, 1), new Date())
    },
  ]

  ngOnInit():void {
    console.log('App OnInit')
      setTimeout(() => {
        console.log('TimeOut')
        this.posts[0] = {
            title: 'change',
            text: 'changed This',
            id: 4,
            date: this.randomDate(new Date(2012, 0, 1), new Date())
        }
      }, 3000)
  }

  upgatePosts(post: Post) {
    post.id = this.posts.length + 1;
    this.posts.unshift(post);
  }

  searchPost(search: string) {
    this.search = search;
  }

  changeSearchPostType(type: string) {
      this.searchType = type;
  }

  RemovePost(id:number) {
      this.posts = this.posts.filter(p => p.id !== id);
  }

  randomDate(start: Date, end: Date):Date {
     return new Date(start.getTime()
     + Math.random() * (end.getTime() - start.getTime()));
  }
}
