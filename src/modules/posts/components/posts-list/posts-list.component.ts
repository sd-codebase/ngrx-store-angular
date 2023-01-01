import { Component, OnInit } from '@angular/core';
import { IPost } from '../../posts.interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostsService) {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {

  }

}
