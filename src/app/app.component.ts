import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'Angular Theory';

  posts: Post[] = [
    {
      title: 'Я пробую изучать компоненты Angular',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nemo!',
      id: 1
    },
    {
      title: 'Надеюсь, я не трачу время в пустую',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illum accusamus consectetur enim nobis neque!',
      id: 2
    }
  ]

  ngOnInit():void {
    console.log('App OnInit')
      setTimeout(() => {
        console.log('TimeOut')
        this.posts[0] = {
            title: 'change',
            text: 'changed This',
            id: 4
        }
      }, 3000)
  }

  upgatePosts(post: Post) {
    this.posts.unshift(post);
  }

  RemovePost(id:number) {
      this.posts = this.posts.filter(p => p.id !== id);
  }
}
