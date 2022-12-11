import { Component, OnInit } from '@angular/core';

type post = Array<{ title: string, content: string }>;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  test = "test";

   posts:post = [
    {
      title: "title1",
      content: "To help you get started right away, this tutorial uses a ready-made application that you can examine and modify interactively on StackBlitz —without having to set up a local work environment. StackBlitz is a browser-based development environment where you can create, save, and share projects using a variety of technologies."
    },
    {
      title: "title2",
      content: "To help you get started right away, this tutorial uses a ready-made application that you can examine and modify interactively on StackBlitz —without having to set up a local work environment. StackBlitz is a browser-based development environment where you can create, save, and share projects using a variety of technologies."
    },
    {
      title: "title3",
      content: "To help you get started right away, this tutorial uses a ready-made application that you can examine and modify interactively on StackBlitz —without having to set up a local work environment. StackBlitz is a browser-based development environment where you can create, save, and share projects using a variety of technologies."
    }
   ];
  constructor() { }
  ngOnInit(){}
  
}