import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular components';

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
}
