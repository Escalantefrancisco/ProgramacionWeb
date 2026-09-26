import { Component } from '@angular/core';
import { USER_LIST_DATA } from '../../data/user-list-data';
import { POST_LIST_DATA } from '../../data/post-list-data';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  userList = USER_LIST_DATA;
  postList = POST_LIST_DATA;

  getPostsByUser(userId: number) {
    return this.postList.posts.filter((p) => p.userId === userId);
  }
}