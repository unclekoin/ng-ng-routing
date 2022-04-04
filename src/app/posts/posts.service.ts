import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: Post[] = [
    { id: 1, title: 'Title #1', text: 'Some very interesting text' },
    { id: 2, title: 'Title #2', text: 'Some very interesting text' },
    { id: 3, title: 'Title #3', text: 'Some very interesting text' },
    { id: 4, title: 'Title #4', text: 'Some very interesting text' },
    { id: 5, title: 'Title #5', text: 'Some very interesting text' },
  ];

  getById(id: number) {
    return this.posts.find((post) => post.id == id);
  }
}
