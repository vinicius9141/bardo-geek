import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public posts: any;
  public isLoading: boolean = false;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): any {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
      this.isLoading = true;
    });
  }
}
