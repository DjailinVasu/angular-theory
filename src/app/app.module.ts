import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive'
import { MultByPipe } from './pipes/mult-by.pipe';
import { PostSearchComponent } from './post-search/post-search.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    PostSearchComponent,
    FilterPipe
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
