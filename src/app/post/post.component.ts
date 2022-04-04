import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post!: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postsService.getById(Number(params['id']))
    })
  }

  public loadPost() {
    this.router.navigate(['/posts', 5])
  }

}
