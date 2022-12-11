import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { BrowserModule } from '@angular/platform-browser'



@NgModule({
  declarations: [
    
    PostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class PostsModule { }
