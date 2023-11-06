import { Component } from '@angular/core';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css'],
})
export class PostManagementComponent {
  newPostText: string = '';
  posts: { text: string }[] = [];

  constructor() {
    // Retrieve posts from local storage during component initialization
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    }
  }

  addPost() {
    if (this.newPostText) {
      this.posts.push({ text: this.newPostText });
      this.savePostsToLocalStorage();
      console.log(this.posts);
      this.newPostText = '';
    }
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.savePostsToLocalStorage();
  }

  private savePostsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
